import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

//if (capitalize('hello') !== 'Hello') {
//  throw new Error('Функция работает неверно!');
//}

assert.equal(capitalize('hello'), 'Hello');

//if (capitalize('') !== '') {
//  throw new Error('Функция работает неверно!');
//}

assert.equal(capitalize(''),'');
console.log('Все тесты пройдены!');
