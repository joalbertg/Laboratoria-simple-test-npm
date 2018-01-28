const isVowel = require('../solution/isVowel');
const cl = console.log;

console.log('debería devolver true para letra a');
isVowel('a') === true ? cl('✓ ok') : cl('✗ fail');

console.log('debería devolver true para letra b');
isVowel('b') === false ? cl('✓ ok') : cl('✗ fail');
