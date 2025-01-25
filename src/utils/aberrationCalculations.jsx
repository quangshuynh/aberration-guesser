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
  
    const aberrationValues = ABERRATIONS.reduce((acc, aberration) => {
      acc[aberration] = selectedAberrations.includes(aberration)
        ? getRandomValue()
        : 0;
      return acc;
    }, {});
  
    return {
      type: Math.random() < 0.5 ? "Wavefront" : "Transverse",
      aberrations: aberrationValues,
    };
  };
  
  export const calculatePlotPoints = (type, aberrations) => {
    return Object.entries(aberrations)
      .filter(([_, value]) => value !== 0)
      .map(([aberration, value]) => ({
        name: aberration,
        x: Array.from({ length: 100 }, (_, i) => i / 10),
        y: Array.from({ length: 100 }, (_, i) => Math.sin(value * (i / 10))),
      }));
  };
  