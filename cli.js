const readline = require('readline');
const drone = require('./lib');

const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (input) => {
  try {
    const report = drone(input);
    console.log('Drone report:\n%s', report);
  } catch (e) {
    console.error('Uh oh. There is an error:', e);
  }

  rl.close();
});
