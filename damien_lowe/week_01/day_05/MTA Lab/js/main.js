// MTA Lab

// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey
//  and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different
//    than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



//Global variables
let startingStop = 0;
let endingStop = 0;
let numberOfStops = 0;
let totalStops = 0;
//Array to store the stops on each journey
let stopsSeen = [];
let stopsSeenLine2 = [];
//Object to store station indicies to use later
//The Differnet Train lines
//Renamed N28th --> N27th, N23rd --> N22nd, E8th -->E7th
const allLines = {
  nLine: ["Times", "34th", "27th", "22nd", "Union", "8th"],
  eLine: ["7th", "6th", "Union", "3rd", "1st"],
  wLine: ["Central", "33rd", "28th", "23rd", "Union", "Astor"]
};

// Function to find the index Of the start and end stops
const stationIndex = function (line, start, end) {
  startingStop = allLines[line].indexOf(start);
  endingStop = allLines[line].indexOf(end);
};

//Function to work out which Direction
const whichDirection = function (line, start, end) {
  stationIndex(line, start, end);
  if (startingStop < endingStop) {
    leftToRight(line, start, end);
  } else {
    rightToLeft(line, start, end);
  };
};

//+Direction
const leftToRight = function (line, start, end) {
  stationIndex(line, start, end);
  //To save each stop into stopsSeen[]
  stopsSeen = allLines[line].slice(startingStop + 1, endingStop + 1);
  //Work out the number of stops
  numberOfStops = endingStop - startingStop;

};

//-Direction
const rightToLeft = function (line, start, end) {
  stationIndex(line, start, end);
  let arrayToReverse = [];
  //Work out number of stops
  numberOfStops = startingStop - endingStop;
  //To save each stop in stopsSeen[]
  arrayToReverse = allLines[line].slice(endingStop, startingStop);
  stopsSeen = arrayToReverse.reverse();
};

//Function to travel with no interchange
const singleLine = function (line1, start, end) {
  whichDirection(line1, start, end);
  console.log(`You must travel through the following stops on the ${line1}: ${stopsSeen.join(", ")}.`);
  console.log(`There are ${numberOfStops} in total.`);
};

//To travel and change line once
const twoLines = function (line1, start, line2, end) {
  //Take line1 first
  whichDirection(line1, start, "Union");
  totalStops += numberOfStops;
  console.log(`You must travel through the following stops on the ${line1}: ${stopsSeen.join(", ")}.`);
  console.log(`Change at Union Square.`);
  //Then line2
  whichDirection(line2, "Union", end);
  stopsSeenLine2 = stopsSeen;
  totalStops += numberOfStops;
  console.log(`Your journey continues through the following stops on the ${line2}: ${stopsSeenLine2.join(", ")}.`);
  console.log(`There are ${totalStops} in total.`);
};

//To check if you have to travel across more than one line
const planTrip = function (line1, start, line2, end) {
  //If station doesn't exist on the line
  // if (-1 === allLines.search(start) || -1 === allLines.search(end)) {
    console.log(`The station does not exist!!`);
    if (line1 === line2) {
      singleLine(line1, start, end);
    } else {
      twoLines(line1 ,start, line2, end);
    };
};

//Add checks for invalid stations
