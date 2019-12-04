
import { dataSet } from '../src/data/rickandmorty/rickandmorty.js';
import {
  humans,
  sortAnythingByName
} from '../src/data.js';

describe('data', () => {

  it('debería ser una función', () => {
    expect(typeof sortAnythingByName ).toBe('function');
  });
  it('deberia retornar "Abradolf Lincler" para "SortAnythingByName" con posicion 0 filtrado Humans', () => {
  expect (sortAnythingByName(humans)[0].name).toBe('Abradolf Lincler');
});


});