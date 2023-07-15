// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./3-names');
const sayHi = require('./4-utils');
console.log(names)

const data = require('./5-alternative-exports');
console.log(data)

require('./6-mind-grande');

sayHi('Susan');
sayHi(names.john)
sayHi(names.peter)