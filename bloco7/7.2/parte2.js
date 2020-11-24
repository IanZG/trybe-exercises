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
  