const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain;
        bc2 = new Blockchain;
    })

    it('starts with the genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {
        const data = 'foo';
        newBlock = bc.addBlock(data);

        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    });

    it ('validates a validate chain', () => {
        bc.addBlock('foo');

        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    it ('invalidates a chain with a corrupt genesis block', () => {
        bc2.chain[0] = 'bad data';
        expect(bc.isValidChain(bc2.chain)).toBe(false)
    });

    it('invalidates a corrupt chain', () => {
        bc2.addBlock('foo');
        bc2.chain[1].data = 'not foo';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    })
})