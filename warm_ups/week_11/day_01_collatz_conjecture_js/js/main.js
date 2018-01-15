const collatz = function( num ){

  // This collection will be where we store each value for comparison. With each iteration we will add the new value to the end and target that value with `collection[ collection.length - 1 ]`.
  let collection = [ num ];

  const makeCollection = function(){

    while ( collection[collection.length - 1] > 1 ){
      // Using debugger to stop the code to show the collection being collated with each iteration.
      // debugger;

      const currentNum = collection[ collection.length - 1 ];

      // This ternary will do two things for us, it will evaluate if the number give is odd or even then run the corresponding code.
      const nextIndex = currentNum % 2 === 0 ? ( currentNum / 2 ) : (( currentNum * 3 ) + 1 );

      collection.push( nextIndex );

    }

  };

  // This function will out put the result in the console.
  const answer = function(){
    console.log(`The function ran ${ collection.length - 1 } times.`);
    // We're using join with the delimiter of ', ' to seperate each element.
    console.log(`The process was: ${ collection.join(', ') }.`);
  }

  // call both functions otherwise nothing will happen.
  makeCollection();
  answer();

  // we have the ability to return an output for a user through the console logs but what about return the data in a format that another programmer might like to use?
  return {
    start: num,
    collection: collection,
    steps: collection.length - 1
  }

};

// call the outer function with a console log so we can see what we're returning.
console.log(collatz(12));
