const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('testes exercise', () => {
  it('4 + 5 = 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('0 + 0 = 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('string error', () => {
    expect(() => { sum(4, "5"); }).toThrow('parameters must be numbers');
  })
});