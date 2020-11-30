const lesson1 = {
<<<<<<< HEAD
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, chave, valor) => {
  obj[chave] = valor;
};
addTurno(lesson2, "turno", "manhã");
console.log(lesson2);

const listaKeys = obj => {
  const chaves = Object.keys(obj);
  return chaves;
}
console.log(listaKeys(lesson2));

const tamanhoObj = obj => Object.keys(obj).length;
console.log(tamanhoObj(lesson2));

const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson1));
=======
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function adicionaManha (objeto, turno, valor) {
      objeto.turno = valor;
      console.log(objeto);
  }
  adicionaManha(lesson2, 'turno', 'manhã');

  function listarKeys (objeto) {
      const chaves = Object.keys(objeto);
      console.log(chaves);
  }
  listarKeys(lesson2);

  function tamanho (objeto) {
    const tamanho = Object.keys(objeto).length;
    console.log(tamanho);
}
tamanho(lesson2);

function listarValores (objeto) {
    const chaves = Object.values(objeto);
    console.log(chaves);
}
listarValores(lesson2);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  
>>>>>>> 57153a413fc990ddb6b280e1ac8d80bfd10b1155
