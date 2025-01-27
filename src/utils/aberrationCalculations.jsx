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
  defocus: (r, theta, coeff, h) => coeff * r ** 2,
  tilt: (r, theta, coeff, h) => coeff * h * r * sin(theta),
  spherical: (r, theta, coeff, h) => coeff * r ** 4,  // siedel 5
  coma: (r, theta, coeff, h) => coeff * r ^ 3 * h * sin(theta),  // siedel 6
  astigmatism: (r, theta, coeff, h) => coeff * h * r * sin(theta),  // siedel 7
  petzval: (r, theta, coeff, h, astigcoeff) => (0.5 * astigcoeff + coeff) * (h ** 2) * (r ** 2),  // siedel 8
  distortion: (r, theta, coeff, h) => coeff * h ** 3 * r * sin(theta),  // siedel 9
  axialColor: (r, theta, coeff, h) => coeff * r / (1 + r),
  lateralColor: (r, theta, coeff, h) => coeff * r * Math.sin(theta),
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
          if(r <= 1) {
            let value;
            if(type === "Wavefront") {
              value = aberrationEquations[aberration](r, theta, coeff) || 0;
            } else if (type === "Transverse") {
              const wavefront = aberrationEquations[aberration](r, theta, coeff) || 0;
              const dW_dr = (wavefront - aberrationEquations[aberration](r - 0.01, theta, coeff)) / 0.01;
              const dW_dtheta = (wavefront - aberrationEquations[aberration](r, theta - 0.01, coeff)) / (0.01 * r);
              value = Math.sqrt(dW_dr ** 2 + dW_dtheta ** 2); 
            }
            points.push({ x, y, z: value });
          }
        }
      }
      return { name: aberration, points };
    });
  return plotData;
};
