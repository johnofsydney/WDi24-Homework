# Robot Simulator

Badger Robotics manufactures robots that have three possible movements:

* turn right
* turn left
* advance

The robot factory's test facility (aka "your browser's console") has a simulator which can take a string of
letters and feed this into a robot as instructions.

### Requirements (DO THIS IN JAVASCRIPT)

- Draw a grid on the page - like a chess board - 8 x 8
- Have a function to change the fake robots orientation - north, south, east, west
- Have a function to advance one step
- Don't worry about testing, just make it look decent.
- You can use jQuery and what ever other libraries you want

```
robot = new Robot({ name: "Wolf" });

robot.turn( "right" );
robot.turn( "left" );
robot.advance();
```

### Extra Credit

- Control the robot with your keyboard (left, right, forward)
- Error handling - don't let it go off the board
- Animations
- Advance a few steps at a time
- Pass in a series of instructions
- Bring the pretty

You could have a look at [this library](https://craig.is/killing/mice)

## Source
Inspired somewhat by an interview question at a famous company.
