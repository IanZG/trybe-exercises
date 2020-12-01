const lesson1 = {
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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const alunosTotais = allLessons => {
  let totalDeAlunos = 0;
  allLessons.forEach(element => {
    totalDeAlunos += element.numeroEstudantes;
  });
}
console.log(alunosTotais(allLessons));
