const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => piadaDom(data.joke));
};

const piadaDom = (piada) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = piada;
}

window.onload = () => fetchJoke();