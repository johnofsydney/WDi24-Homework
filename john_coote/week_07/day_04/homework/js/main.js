console.log("connected");

// Arrays!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort"];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];







// Create an array of every five numbers between 30 and 101
let fiveArray = _.range(30, 101, 5)
console.log(fiveArray);

// Turn bumpyArr into one flat array (no nested arrays)
let flatArray = _.flatten(bumpyArr)
console.log(flatArray);

// Remove all of the falsey elements in the uncompactedArr
truthyArray = _.compact(uncompactedArr)
console.log(truthyArray);


// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
let flatArray2 = _.flatten([[ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0]])
let uniqueArray = _.uniq(flatArray2)
console.log(uniqueArray);

// Find the index of the first element in numbers that is over 7 and is even
let position8 = _.findIndex(numbers, function (num) {
  return ( (num > 7) && (num % 2 === 0));
})
console.log(position8);

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
let transformed = _.object(arrToTransform[0], arrToTransform[1])
console.log(transformed);



// Objects!
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}
// Multiply each value in objectToMap by a random number and return an object with the changed values
let mappedObject = _.map(objectToMap, function (num) {
  return num * _.random(1,10)
})
console.log(mappedObject);


// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
// let version = _.object(_.keys(objectToMap), _.values(objectToMap))
let version = _.pairs(objectToMap)
console.log(version);



// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
console.log(_.invert(objectToMap));


// Remove the "start" key from objectToMap in two different ways
console.log(_.omit(objectToMap, 'start'));
console.log(_.pick(objectToMap, 'middle', 'end'));

/////////////////////////////////////////////

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];


// Log out 30 random numbers between 20 and 100
console.log(_.times(30, function () {
  return _.random(20,100)
}));


// Create a function that can only ever be called once
let alreadyRun = false;
const onceOnly = function () {
  if (alreadyRun === true) { return };
  console.log("Running Once");
  alreadyRun = true

}

// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>
let peopleParagraph = ""
let peepsNames = _.each(people, function (person) {
  peopleParagraph = peopleParagraph + "<p>Hello " + person.username + ", you don't look a day over 20 </p>"
})

let appToBody = function (texts) {
  $('body').html(texts)
}

$(document).ready( function () {
  appToBody(peopleParagraph)
})



/////////////////////////////////

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];


// First step is restructuring each one of the nested arrays (_.unzip will help). For example:
// // This...
// [["groucho", "marx", 1990], ["firstName", "lastName", "born"]]
//
// // Needs to become this...
// [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
let unzippedData = []
for (var i = 0; i < startingData.length; i++) {
  unzippedData.push(_.unzip(startingData[i]))
}
console.log(unzippedData);

// You then need to turn them into an object (_.object will help). For example:
// // This...
// [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
//
// // Needs to become this...
// { 1990: "born", groucho: "firstName", marx: "lastName" }
let objectifiedArray = []
for (var i = 0; i < unzippedData.length; i++) {
  objectifiedArray.push(_.object(unzippedData[i]))
}
console.log(objectifiedArray);
//
// You then need to flip that object around (_.invert will help). For example:
// // This...
// { 1990: "born", groucho: "firstName", marx: "lastName" }
//
// // Needs to become this...
// { born: "1990", firstName: "groucho", lastName: "marx" }
let invertedArray = []
for (var i = 0; i < objectifiedArray.length; i++) {
  invertedArray.push(_.invert(objectifiedArray[i]))
}
console.log(invertedArray);

//
// You then need to change each value in that object. If the value can be turned into a number, you need to minus 100 from it. If it can't be, you need to make the first letter a capital (_.mapObject, _.isNaN will help) For example:
// // This...
// { born: "1990", firstName: "groucho", lastName: "marx" }
//
// // Needs to become this...
// { born: 1890, firstName: "Groucho", lastName: "Marx" }

_.mapObject(invertedArray[0], function (val, key) { return val + " bob" } )

let manipArray = []
for (var i = 0; i < invertedArray.length; i++) {
  manipArray.push(_.mapObject(invertedArray[i], function (val, key) {
    if (_.isNaN(parseInt(val))) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    } else {
      return ( parseInt(val) - 100 )
    }
     } ))
}

console.log(manipArray);


let templateVariable = _.template("<%= firstName %> <%= lastName %> was born in <%= born %>")
for (var i = 0; i < manipArray.length; i++) {
  console.log(templateVariable(manipArray[i]));
}
