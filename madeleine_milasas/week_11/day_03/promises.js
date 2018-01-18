
// HOMEWORK EXERCISES - REWRITE AS PROMISES
// Create a function called wait() which returns a promise that will run your .then
// after n millis have elapsed
// setTimeout(..., 800);
// make it
// wait(800).then(...);

const wait = function(n) {
  return new Promise(function(resolve) {
    setTimeout(resolve, n);
  });
};

wait(800)
  .then(() => {
    console.log( `I waited` );
  })

wait(1600)
  .then(() => {
    console.log( `and waited` );
  });


// 2. Write a promise-based wrapper around XMLHttpRequest
// retrieve(someURL).then(...);


const someURL = "http://numbersapi.com/random/trivia?json";


// don't think this is working as i only get error catches
const retrieve = function(url) {
  return new Promise(function(resolve, reject) {
    // do some async stuff
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    // call resolve if it succeeded
    xhr.onload = resolve;
    // call reject if it failed
    xhr.onerror = reject;
    xhr.send();
  });
}

retrieve(someURL).then((data) => {
  console.log( data );
}).catch(() => {
  console.log( `ERRORS OH MY` );
});
