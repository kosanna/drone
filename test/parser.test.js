const assert = require('assert');
const parser = require('../lib/parser');

describe('parser', () => {
  it('should work for basic example', () => {
    assert.deepEqual(parser('4 5 2 1 N MMRMLMQ'),
      {
        area: { width: 4, height: 5 },
        position: { x: 2, y: 1, f: 'N' },
        commands: ['M', 'M', 'R', 'M', 'L', 'M', 'Q'],
      });
  });

  describe('invalid input', () => {
    it('should throw for invalid area width', () => {
      assert.throws(() => parser('0 5 2 1 N MMRQ'), /Area width is not valid/);
      assert.throws(() => parser('-1 5 2 1 N MMRQ'), /Area width is not valid/);
      assert.throws(() => parser('kraken 5 2 1 N MMRQ'), /Area width is not valid/);
    });

    it('should throw for invalid area height', () => {
      assert.throws(() => parser('1 0 2 1 N MMRQ'), /Area height is not valid/);
      assert.throws(() => parser('1 -1 2 1 N MMRQ'), /Area height is not valid/);
      assert.throws(() => parser('1 kraken 2 1 N MMRQ'), /Area height is not valid/);
    });

    it('should throw for invalid position x', () => {
      assert.throws(() => parser('1 1 -1 1 N MMRQ'), /Starting x coordinate is not valid/);
      assert.throws(() => parser('1 1 kraken 1 N MMRQ'), /Starting x coordinate is not valid/);
    });

    it('should throw for invalid position y', () => {
      assert.throws(() => parser('1 1 0 -2876 N MMRQ'), /Starting y coordinate is not valid/);
      assert.throws(() => parser('1 1 0 kraken N MMRQ'), /Starting y coordinate is not valid/);
    });

    it('should throw for unknown command', () => {
      assert.throws(() => parser('1 1 0 0 S ZU'), /Unknown command code/);
    });

    it('should throw for invalid facing', () => {
      assert.throws(() => parser('1 1 0 0 U MMRQ'), /Unknown faced position/);
    });
  });
});
