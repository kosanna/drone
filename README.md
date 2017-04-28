# Drone simulation

The Problem 
============
Scientists are concerned about the degradation of glaciers in New Zealand. But due to the difficulties of the terrain they are conducting their research using automated drones. For each "drop" they map out an area of the glacier into a rectangle, and drop the drone from a helicopter. The drone is then sent a series of commands which move it through the rectangle and it photographs each location as it goes.
 
The drones are pretty basic - they can move forward, or they can turn 90 degrees left or right. They can also report their current position and the direction they are facing.
Their command input is a single line of text.
First the maximum coordinates of the rectangle they are to explore, separated by spaces. (The South West corner of the grid is 0, 0).
Followed by the drop coordinates and direction for their starting position in the rectangle, followed by the movement and turning commands and usually ending with a command to query their location information, although that can be requested at any time in the sequence.
 
For example
4 5 2 1 N MMRMLMQ
 
This means that the North East corner of the rectangle is (4, 5). And that this drone was dropped in the 2,1 location of the rectangle, facing North.
Then it should move forwards twice, turn right, move forward, turn left, move forward, and finally it should report it's position.
Based on this input the drone should report that it is now in location 3, 4 and facing North. So the expected "output" is the string "3 4 N"

## Setup

```shell
cd drone/
# install dependencies
npm i
# run linter
npm run lint
# run tests
npm t
```

## Usage

You can use the library from command line by doing following:

```shell
echo '4 5 2 1 N MMRMLMQ' | node ./cli
```
