const assert = require('assert');
const drone = require('../lib');

describe('drone', () => {
  it('should work for basic example', () => {
    assert.equal(drone('4 5 2 1 N MMRMLMQ'), '3 4 N');
  });

  it('should work for more advanced case', () => {
    assert.equal(drone('4 4 2 0 E MMMQ'), '3 0 E');
    assert.equal(drone('4 4 2 0 E MMMLMQ'), '3 1 N');
    assert.equal(drone('4 4 2 0 E MMMLMRRRQ'), '3 1 W');
    assert.equal(drone('4 4 2 0 E MMMLMRRRMRMQ'), '2 2 N');
    assert.equal(drone('4 4 2 0 E MMMLMRRRMRMLQ'), '2 2 W');
    assert.equal(drone('4 4 2 0 E MMMLMRRRMRMLLQ'), '2 2 S');
  });
});
