const assert = require('assert')

const rectangleArea = (width, height) => width * height

const rectangle1 = [1, 2]
const rectangle2 = [3, 5]
const rectangle3 = [6, 9]
const rectangles = [rectangle1, rectangle2, rectangle3]

for (rectangle of rectangles) {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]) // altere a chamada da funcao rectangleArea
}


// escreva sum abaixo
const sum = (...numeros) => {
  let retorno = 0;
  numeros.forEach(numero => {
    retorno += numero;
  });
  return retorno;
}

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)


const alex = {
  name: "Alex",
  age: 26,
  likes: ["fly fishing"],
  nationality: "Australian"
}

const gunnar = {
  name: "Gunnar",
  age: 30,
  likes: ["hiking", "scuba diving", "taking pictures"],
  nationality: "Icelandic"
}

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(", ")}.`
assert.strictEqual(personLikes(alex), "Alex is 26 years old and likes fly fishing.")
assert.strictEqual(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.")




const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian"
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian"
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian"
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish"
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian"
  }
]

const bornIn20Century = year => year >= 1901 && year <= 2000
const isAustralian = nationality => nationality === "Australian"
const filterPeople = (people) => people.filter(
  ({ bornIn, nationality }) => bornIn20Century(bornIn) && isAustralian(nationality)
)

const filteredPeople = filterPeople(people)

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })


const myList = [1, 2, 3]

// escreva swap abaixo

const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList)

assert.strictEqual(swappedList[0], 3)
assert.strictEqual(swappedList[1], 2)
assert.strictEqual(swappedList[2], 1)


const palio = ["Palio", "Fiat", 2019]
const shelbyCobra = ["Shelby Cobra", "Ford", 1963]
const chiron = ["Chiron", "Bugatti", 2016]

// escreva toObject abaixo

const toObject = (carro) => {
  [a, b, c] = carro;
  let retorno = {};
  retorno.name = a;
  retorno.brand = b;
  retorno.year = c;
  return retorno;
};

assert.deepStrictEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 })
assert.deepStrictEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 })
assert.deepStrictEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 })


const ships = [
  {
    name: "Titanic",
    length: 269.1
  },
  {
    name: "Queen Mary 2",
    length: 1132,
    measurementUnit: "feet"
  },
  {
    name: "Yamato",
    length: 256,
    measurementUnit: "meters"
  }
]

// escreva shipLength abaixo

const shipLength = ({ name, length, measurementUnit = 'meters' }) => {
  return `${name} is ${length} ${measurementUnit} long`;
};

assert.strictEqual(shipLength(ships[0]), "Titanic is 269.1 meters long");
assert.strictEqual(shipLength(ships[1]), "Queen Mary 2 is 1132 feet long");
assert.strictEqual(shipLength(ships[2]), "Yamato is 256 meters long");

// escreva greet abaixo
const greet = (pessoa = 'John', saudacao = 'Hi') => {
  return `${saudacao} ${pessoa}`;
};
assert.strictEqual(greet("John"), "Hi John");
assert.strictEqual(greet("John", "Good morning"), "Good morning John");
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela");