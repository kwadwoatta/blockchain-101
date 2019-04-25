const Block = require('./Block');

const block = new Block('foo', 'bar', 'zoo', 'buzz');
console.log(block.toString());
console.log(Block.genesis().toString());