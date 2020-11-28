const fatorial = numero => {
  let numFatorial = numero;
  for (let i = numero - 1; i > 0; i--) {
    numFatorial = numFatorial * i;
  };
  return numFatorial;
};
console.log(fatorial(4));

const maiorPalavra = frase => {
  const palavras = frase.split(' ');
  let palavraMaior = '';
  let maiorLength = 0;
  for (let palavra of palavras) {
    if (palavra.length > maiorLength) {
      maiorLength = palavra.length;
      palavraMaior = palavra;
    };
  };
  return palavraMaior;
};
console.log(maiorPalavra('vambora meu parceiro'));

const btn = document.getElementById('btn');
let contadorClicks = 0;
const div = document.getElementById('div');
div.innerHTML = `Clicks = ${contadorClicks}`;
btn.addEventListener('click', () => {
  contadorClicks += 1
  div.innerHTML = `Clicks = ${contadorClicks}`;
});

const fraseX = 'eu x vc'
const trocaX = (string) => {
  for (let letra of fraseX) {
    if (letra === 'x') {
      letra = 'string'
    };
  };
  return fraseX;
}
console.log(trocaX('ahiu'));