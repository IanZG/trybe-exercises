const promise = new Promise((resolve, reject) => {
  const array = [];
  const arrayDividido = [];
  const numMax = 50;
  for (let i = 0; i < 10; i++) {
    let numI = Math.floor(Math.random() * numMax)
    array.push(numI * numI);
  }
  let soma = 0;
  const somaArray = array.forEach(numero => soma += numero);
  if (soma > 8000) {
    return reject('É mais de 8 MIIIIL !!!')
  }
  arrayDividido.push(Math.floor(soma / 2));
  arrayDividido.push(Math.floor(soma / 3));
  arrayDividido.push(Math.floor(soma / 5));
  arrayDividido.push(Math.floor(soma / 10));
  resolve(
    arrayDividido
  )
})
  .then(result => console.log(result))
  .catch(erro => console.log(erro));