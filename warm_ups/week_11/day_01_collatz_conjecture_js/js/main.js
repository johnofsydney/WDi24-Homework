const collatz = function( num ){

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

  // This method will out put the result in the console.
  const answer = function(){
    console.log(`The function ran ${ collection.length - 1 } times.`);
    // We're using join with the delimiter of ', ' to seperate each element.
    console.log(`The process was: ${ collection.join(', ') }.`);
  }

  
  makeCollection();
  answer();

  return {
    start: num,
    collection: collection,
    steps: collection.length - 1
  }

};

console.log(collatz(12));
