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
  defocus: (r, theta, coeff) => coeff * r ** 2,
  tilt: (r, theta, coeff) => coeff * r * Math.cos(theta),
  spherical: (r, theta, coeff) => coeff * r ** 4,
  coma: (r, theta, coeff) => coeff * r ** 3 * Math.cos(theta),
  astigmatism: (r, theta, coeff) => coeff * r ** 2 * Math.cos(2 * theta),
  petzval: (r, theta, coeff) => coeff * r ** 2,
  distortion: (r, theta, coeff) => coeff * r ** 3,
  axialColor: (r, theta, coeff) => coeff * r / (1 + r),
  lateralColor: (r, theta, coeff) => coeff * r * Math.sin(theta),
};


const getRandomValue = () => {
  let value;
  do {
    value = Math.random() * 10 - 5;
  } while (Math.abs(value) < 1);
  return value;
};


export const generatePlotData = () => {
  const selectedAberrations = ABERRATIONS.sort(() => 0.5 - Math.random()).slice(
    0,
    Math.floor(Math.random() * 3) + 2
  );

  const aberrationValues = selectedAberrations.reduce((acc, aberration) => {
    acc[aberration] = getRandomValue(); 
    return acc;
  }, {});

  ABERRATIONS.forEach((aberration) => {
    if (!selectedAberrations.includes(aberration)) {
      aberrationValues[aberration] = 0;
    }
  });

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
