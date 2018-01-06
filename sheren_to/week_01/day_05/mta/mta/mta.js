console.log("MTA");

const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

let stationsToTravel = [];//array for stations to travel

const interchange = "Union Square";

const getLineByName = function(lineName){
  switch (lineName) {
    case "lineL":
     line = lineL
      break;
      case "lineN":
      line = lineN
        break;
    default:
      line = line6;
  }
  return line;
}
const getDirection = function (stationIndex, destinationIndex) {
    let direction = 0;
    if (stationIndex > destinationIndex) {
      direction = -1;
    } else if (stationIndex < destinationIndex) {
      direction = 1;
    }
    return direction;
}
const appendStationsForLeg = function(startIndexForLeg, destinationIndexForLeg, line, directionLeg){
  console.log("direction:" + directionLeg);
  i = startIndexForLeg;
  while(true){
    if((directionLeg > 0 && i > destinationIndexForLeg) || (directionLeg < 0 && i < destinationIndexForLeg))
      break;

    console.log("push i:" + i)
    stationsToTravel.push(line[i]);
    //console.log("station:" + line[i] + " index:" + i);
    i += directionLeg;
    //debugger;
  }

}
const planTrip = function(startLineName, startStationName, destinationLineName, destinationStationName){
   startLine = getLineByName(startLineName);
   destinationLine = getLineByName(destinationLineName);
   //debugger;
   console.log("start station:" + startStationName);
   startStationIndex = startLine.indexOf(startStationName);
   console.log("start station index:" + startStationIndex);
   console.log("destination:" + destinationStationName);


   let startLineInterchangeIndex = startLine.indexOf(interchange);
   let destinationLineInterchangeIndex = destinationLine.indexOf(interchange);

   let isSameLine = startLineName === destinationLineName;
   if (!isSameLine) {
     destinationStationIndex = destinationLine.indexOf(destinationStationName);
     console.log("destination station index:" + destinationStationIndex);

     console.log("Your stations are on different lines and you will need to change trains at Union Square");
     let directionLeg = getDirection(startStationIndex, startLineInterchangeIndex);
     appendStationsForLeg(startStationIndex, startLineInterchangeIndex, startLine, directionLeg);
     directionLeg = getDirection(destinationLineInterchangeIndex, destinationStationIndex);
     appendStationsForLeg(destinationLineInterchangeIndex + directionLeg, destinationStationIndex, destinationLine, directionLeg);

   } else {
     console.log("Your stations are on the same line.");
     destinationStationIndex = startLine.indexOf(destinationStationName);
     console.log("destination station index:" + destinationStationIndex);
     appendStationsForLeg(startStationIndex, destinationStationIndex, startLine);
   }
   console.log(stationsToTravel);
   for ( let i = 0; i < stationsToTravel.length; i++) {
     console.log( stationsToTravel[i] );
   }
   console.log( stationsToTravel.length + " stops in total.");
}

planTrip("lineL", "8th", "lineN", "Times Square");

// const trainLines = function () {//find a way to see if elements are in the same array, need to differntiate same stations names
//   if ( lineL.includes("8th") && lineL.includes("Union Square") ) {
//     console.log('Stattions are on the same line.')
//   } else {
//     console.log('Stations are on different lines and you will need to change trains at Union Square.')
//   }
// };
//
// //if trains are on the same line
// const sameLine = function ( stops ) {
//   let stationStops = []; // new array
//   for ( let i = a; i < b + 1; i++) { // need to change line for each line travelled
//     //let i index = a? a should be a number
//      console.log( stops );//loop to find stations from a to b
//     //list stations in array
//     //use new array to sum total number of stations
//   }
//   stationStops.push( stops );
//   console.log( stationStops );
// };
//

// //if trains are not on the same line
// const diffLine = function () {
//   for ( let i =  ; i < lineL.length - 1; i++) { // need to change from one line to the next
//     //let i index = a? a should be a number
//     //loop to find stations from a to c then c to b
//     //list stations in array from a to c, then push same stations to same array from c to b
//     //use new array to sum total number of stations
//   }
// };
//
// //push stations into new array of stations from a to b or a to c then c to b
// //newarray.length -1 = number of stations
