const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (getMarsTemperature, messageDelay) => {
  const retorno = `Mars temperature is: ${getMarsTemperature()} degree Celsius`;
  const delay = messageDelay();
  setTimeout(() => console.log(retorno), delay);
};


sendMarsTemperature(getMarsTemperature, messageDelay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo