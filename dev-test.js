const Block = require('./block');

// const block = new Block('foo', 'bar', 'zoo', 'buzz');
// console.log(block.toString());
// console.log(Block.genesis().toString());

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());