

// *** single line journey*****//


const nLine = ['Times Square', '34th', 'twenty8th', 'twentythird', 'Union Square','8th'];
const nLineReverse = nLine.reverse(); //for the reverse journey

const planTrip = function (startStation, stopStation) {
  //allocating a var to the start and end index
  let startIndex = nLine.indexOf(startStation);
  let stopIndex = nLine.indexOf(stopStation);
  //calculate the number of stops
  let noOfStops = (stopIndex - startIndex);
  //to access the stops between the start and end of the journey and put them into there own array
  let tripArray = [];
  for (let i = startIndex + 1; i <= stopIndex; i++) {
    tripArray.push(nLine[i]);
  }
  console.log(`Your trip is through ${ tripArray }.`);
  console.log(`There will be ${noOfStops} stops in total.`);
};

planTrip ('Union Square','Times Square');


/////////////////////////////////////////////////////////////////////////////////
// //Started atempt on the multiple line journey
//
// // Start with outlining each of the arrays - lines.
//
// const nLine = ['Times Square', '34th', 'twenty8th', 'twentythird', 'Union Square','8th'];
// // const nLineReverse = nLine.reverse(); //for the reverse journey
//
// const lLine = ['eighth', '6th', 'Union Square', '3rd', '1st'];
// // const lLineReverse = lLine.reverse();
//
// const sixthLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
// // const sixthReverse = sixthLine.reverse();
//
// // start a function for the start and end of the journey//
// const planTrip = function (startLine, startStation, stopLine, stopStation) {
// // create lets for each of the 3 lines start and end stations
//
//         let startInd = nLine.indexOf(startStation);
//         let stopInd = nLine.indexOf(stopStation);
//         let numberOfStops = (stopInd - startInd); //calculate the number of stops
//
//         let startIndex = lLine.indexOf(startStation);
//         let stopIndex = lLine.indexOf(stopStation);
//         let noOfStops = (stopIndex - startIndex);   //calculate the number of stops
//
//         let starIndex = sixthLine.indexOf(startStation);
//         let stoIndex = sixthLine.indexOf(stopStation);
//         let numOfStops = (stoIndex - starIndex);  //calculate the number of stops
//
// //There are 6 possble combinations of start and end stations. N line on its on, Lline on its own, 6th line on its own.
// //then there are the combinations of Nline & 6th line, NLine & Lline, LLine and 6th Line as all only intersect at Union Square.
// // create if and else statements to cover each of the line options.
//
// //start and end only on the nLine
//     if (startLine === 'nLine' && stopLine === 'nLine') {
//         let tripStops = [];
//         for (let i = startInd + 1; i <= stopInd; i++) {
//         tripStops.push(nLine[i]);
//         }
//         console.log(`your trip is through ${ tripStops }`);
//         console.log(`There will be ${ numberOfStops } stops in total.`);
//
// //start and end only on the lLine
//     } else if (startLine === 'lLine' && stopLine === 'lLine') {
//         let tripArray = [];
//         for (let i = startIndex + 1; i <= stopIndex; i++) {
//         tripArray.push(lLine[i]);
//         }
//         console.log(`your trip is through ${ tripArray }`);
//         console.log(`There will be ${ noOfStops } stops in total.`);
//
// //start and end only on the sixthLine
//     } else if (startLine === 'sixthLine' && stopLine === 'sixthLine') {
//         let tripStations = [];
//         for (let i = starIndex + 1; i <= stoIndex; i++) {
//         tripStations.push(sixthLine[i]);
//         }
//         console.log(`your trip is through ${tripStations}`);
//         console.log(`There will be ${ numOfStops } stops in total.`);
//
//     } else if (startLine === 'nLine' && stopLine === 'lLine') {
//           // let nlCombo = [];
//           // for (let i = startInd; i <= 'Union Square'; i++) {
//           //   nlCombo.push(nLine[i]);
//           // }
//           // console.log(nlCombo);
//         }
//
//     // } else
//
//       };
//
// planTrip ('nLine','Times Square','lLine','3rd');
