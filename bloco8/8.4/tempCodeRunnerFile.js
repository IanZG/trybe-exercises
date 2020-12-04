const sum = (...parametros) => {
  parametros.reduce((acumulador, atual) => { acumulador + atual }, 0);
};