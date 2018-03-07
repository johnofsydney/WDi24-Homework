// //callback style
//
// // $.ajax(someURL, function(r) {
// //   console.log(r)
// //   // if you want to work with results r you need to do them here
// // })
//
// //promis style
// const promise = $.ajax(someURL);
//
// //
// //
// //
//
// promise.then( function () {
//   //code
// })
//
// promise.then( function () {
//   //more code run seperately from above.
// })


const fs = require('fs'); // node.js standrd library for file system access
//
// fs.readFile('example.txt', 'utf-8', function(err,content) {
//   if (err) {
//     throw err;
//   }
//   console.log(content);
// })

const readFile = function(filename) {
  return new Promise( function (resolve, reject) {
    //The promis callback has to call resolve() and reject()
    fs.readFile(filename, "utf-8", function(err, content) {
      if (err) {
        reject(err) // will run any .catch() callbacks
        return
      }
      resolve(content); // this will run all your .then() callbacks

    })
  })
}

// readFile('example.txt').then( function (data) {
//   console.log(data);
//   return data //you must return the original data if another handler will be atatched.
// })

const promise = readFile('example.txt');

promise.then( function (data) {
  console.log(data.toUpperCase() )
  return data;
})
