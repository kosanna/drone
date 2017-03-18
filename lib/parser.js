const _ = require('lodash');
const assert = require('assert');

const { COMMAND, FACED } = require('./constants');

module.exports = (input) => {
  const [rawWidth, rawHeight, rawX, rawY, f, rawCommands] = input.split(' ');

  const width = _.toNumber(rawWidth);
  const height = _.toNumber(rawHeight);
  const x = _.toNumber(rawX);
  const y = _.toNumber(rawY);
  const commands = rawCommands.split('');

  assert(_.isInteger(width) && width > 0, 'Area width is not valid');
  assert(_.isInteger(height) && height > 0, 'Area height is not valid');
  assert(_.isInteger(x) && x >= 0, 'Starting x coordinate is not valid');
  assert(_.isInteger(y) && y >= 0, 'Starting y coordinate is not valid');

  assert(!_.isEmpty(commands), 'Commands cannot be empty');
  const commandsArray = _.values(COMMAND);
  assert(_.every(commands, command => _.includes(commandsArray, command)), 'Unknown command code');
  const facedArray = _.values(FACED);
  assert(_.includes(facedArray, f), 'Unknown faced position');

  return {
    area: { width, height },
    position: { x, y, f },
    commands,
  };
};
