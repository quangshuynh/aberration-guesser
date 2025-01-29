export const ABERRATIONS = [
  "defocus",
  "tilt",
  "spherical",
  "coma",
  "astigmatism",
  "petzval",
  "distortion",
  "axial color",
  "lateral color",
];

const aberrationEquations = {
  defocus: (r, theta, coeff, h) => coeff * (r ** 2),
  tilt: (r, theta, coeff, h) => coeff * h * r * sin(theta),
  spherical: (r, theta, coeff, h) => coeff * (r ** 4), 
  coma: (r, theta, coeff, h) => coeff * (r ** 3) * h * sin(theta), 
  astigmatism: (r, theta, coeff, h) => coeff * h * r * sin(theta), 
  petzval: (r, theta, coeff, h, astigcoeff) => (0.5 * astigcoeff + coeff) * (h ** 2) * (r ** 2), 
  distortion: (r, theta, coeff, h) => coeff * (h ** 3) * r * sin(theta),  
  //axialColor: (r, theta, coeff, h) => coeff * r / (1 + r),  // TBD
  //lateralColor: (r, theta, coeff, h) => coeff * r * Math.sin(theta),  // TBD 
};


const getRandomValue = () => {
  let value;
  do {
    value = Math.random() * 10 - 5;
  } while (Math.abs(value) < 1);
  return value;
};


export const generatePlotData = () => {
  const selectedAberration = ABERRATIONS[Math.floor(Math.random() * ABERRATIONS.length)];
  const aberrationValues = ABERRATIONS.reduce((acc, aberration) => {
    acc[aberration] = aberration === selectedAberration ? getRandomValue() : 0;
    return acc;
  }, {});

  return {
    type: Math.random() < 0.5 ? "Wavefront" : "Transverse",
    aberrations: aberrationValues,
  };
};


export const calculatePlotPoints = (type, aberrations) => {
  const gridSize = 100;
  const plotData = Object.entries(aberrations).filter(([_, coeff]) => coeff !== 0).map(([aberration, coeff]) => {
      const points = [];
      for(let i = 0; i <= gridSize; i++) {
        for(let j = 0; j <= gridSize; j++) {
          const x = (i - gridSize / 2) / (gridSize / 2); 
          const y = (j - gridSize / 2) / (gridSize / 2);
          const r = Math.sqrt(x ** 2 + y ** 2); 
          const theta = Math.atan2(y, x); 
          const h = 1; // unsure how to implement different h values without duplicating this entire section... temporary test
          if(r <= 1) {
            let value;
            if(type === "Wavefront") {
              value = aberrationEquations[aberration](r, theta, coeff, h) || 0;
            } else if (type === "Transverse") {
              const wavefront = aberrationEquations[aberration](r, theta, coeff, h) || 0;
              const dW_dr = (wavefront - aberrationEquations[aberration](r - 0.01, theta, coeff, h)) / 0.01;
              // const dW_dtheta = (wavefront - aberrationEquations[aberration](r, theta - 0.01, coeff)) / (0.01 * r);
              // value = Math.sqrt(dW_dr ** 2 + dW_dtheta ** 2); 
              value = dW_dr;
            }
            points.push({ x, y, z: value });
          }
        }
      }
      return { name: aberration, points };
    });
  return plotData;
};
