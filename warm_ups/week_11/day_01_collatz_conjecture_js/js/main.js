const collatz = function( num ){

  let collection = [ num ];

  const makeCollection = function(){

    while ( collection[collection.length - 1] > 1 ){
      // Using debugger to stop the code to show the collection being collated with each iteration.
      // debugger;

      const currentNum = collection[ collection.length - 1 ];

      const nextIndex = currentNum % 2 === 0 ? ( currentNum / 2 ) : (( currentNum * 3 ) + 1 );

      collection.push( nextIndex );

    }

  };

  const answer = function(){
    console.log(`The function ran ${ collection.length - 1 } times.`);
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
