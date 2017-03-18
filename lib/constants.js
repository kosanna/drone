const COMMAND = {
  MOVE: 'M',
  RIGHT: 'R',
  LEFT: 'L',
  REPORT: 'Q',
};

const FACED = {
  NORTH: 'N',
  SOUTH: 'S',
  EAST: 'E',
  WEST: 'W',
};

const DIRECTIONS = [FACED.NORTH, FACED.EAST, FACED.SOUTH, FACED.WEST];

module.exports = {
  COMMAND,
  FACED,
  DIRECTIONS,
};
