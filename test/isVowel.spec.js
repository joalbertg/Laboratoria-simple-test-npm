const isVowel = require('../solution/isVowel');
const cl = console.log;
const ce = console.error;

console.log('debería devolver true para letra a');
isVowel('a') === true ? cl('✓ ok') : ce('✗ fail');

console.log('debería devolver false para letra b');
isVowel('b') === false ? cl('✓ ok') : ce('✗ fail');
