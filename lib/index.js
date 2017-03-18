const _ = require('lodash');
const parser = require('./parser');

const { COMMAND, FACED, DIRECTIONS } = require('./constants');

module.exports = function drone(input) {
  const { area, position, commands } = parser(input);
  const currentPosition = _.clone(position);

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    switch (command) {
      case COMMAND.MOVE:
        if (currentPosition.f === FACED.NORTH && currentPosition.y < (area.height - 1)) {
          currentPosition.y++;
        } else if (currentPosition.f === FACED.SOUTH && currentPosition.y > 0) {
          currentPosition.y--;
        } else if (currentPosition.f === FACED.EAST && currentPosition.x < (area.width - 1)) {
          currentPosition.x++;
        } else if (currentPosition.f === FACED.WEST && currentPosition.x > 0) {
          currentPosition.x--;
        }
        break;

      case COMMAND.RIGHT:
        currentPosition.f = DIRECTIONS[DIRECTIONS.indexOf(currentPosition.f) + 1] || FACED.NORTH;
        break;

      case COMMAND.LEFT:
        currentPosition.f = DIRECTIONS[DIRECTIONS.indexOf(currentPosition.f) - 1] || FACED.WEST;
        break;

      case COMMAND.REPORT:
        return `${currentPosition.x} ${currentPosition.y} ${currentPosition.f}`;

      default:
        // do nothing;
        break;
    }
  }

  throw new Error('Report command "Q" expected');
};
