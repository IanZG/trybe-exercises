const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('teste 1', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};
describe('testes exercise 2', () => {
  describe('quando tem o ID', () => {
    test('teste exercise 2 quando tem o ID', () => {
      expect.assertions(1);
      return getUserName(4).then(result => expect(result).toEqual('Mark'));
    });
  });
  describe('quando não tem o ID', () => {
    test('teste exercise 2 quando não tem o ID', () => {
      expect.assertions(1);
      return getUserName(1).catch(error => expect(error).toEqual({ error: 'User with 1 not found.' }))
    });
  });
});

describe('testes exercise 3', () => {
  describe('quando tem o ID', () => {
    it('testa o mesmo codigo, mas utilizando asyn/await', async () => {
      const resultado = await getUserName(4);
      expect(resultado).toEqual('Mark');
    });
  });
  describe('quando não tem o ID', () => {
    it('testa o mesmo codigo, mas utiizando async/await', async () => {
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.' })
      };
    });
  });
});

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('exercise 4', () => {
  it('testa o retorno da API', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list')
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return Animals.filter(animal => animal.name === name)[0]
};

const findAnimalByAge = (age) => {
  return Animals.filter(animal => animal.age === age);
};

const getAnimal = (parametro) => {
  if (typeof parametro === 'string')
    return new Promise((resolve, reject) => {
      if (findAnimalByName(parametro)) {
        return resolve(findAnimalByName(parametro));
      }
      return reject('Nenhum animal com esse nome!');
    });
  return new Promise((resolve, reject) => {
    if (findAnimalByAge(parametro)) {
      return resolve(findAnimalByAge(parametro));
    };
    return reject('Nenhum animal com essa idade!')
  });
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    it('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    it('Retorna um erro', () => {
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });

  describe('Quando existe animal com a idade procurada', () => {
    it('Retorna um array com os objetos respectivos', () => {
      return getAnimal(1).then(result => {
        expect(result).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
      });
    });
  });

  describe('Quando não existe animal com a idade procurada', () => {
    it('Retorna um erro', () => {
      return getAnimal(11).catch(error =>
        expect(error).rejects.toEqual('dfghjk')
      );
    });
  });
});
