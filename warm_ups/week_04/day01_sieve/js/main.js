// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// A prime number is a natural number that has exactly two distinct natural number divisors: 1 and itself.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
// take the next available unmarked number in your list (it is prime)
// remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.

const sieve = function( endPoint ){

  // declaring an empty array that will store the range of numbers
  let range = [];

  // The lopp will start at 2 as that is our first prime.
  for(let i = 2; i <= endPoint; i++ ){

    // pushing 'i' into the empty 'range' array with each iteration. This generates our range of possible numbers.
    range.push( i );
    // console.log(range);
  }

  // We then declare another empty array where we can store the primes once we find them.
  let primes = [];


  // We create another loop that will keep going until there are no more elements in the 'range' array.
  while( range.length > 0 ){

    // .shift() will take the first element in the 'range' array and store it in the 'nextPrime' varilable. This will ALWAYS be our next prime number.
    // eg:
    // let array = [1, 2, 3, 4];
    // let shiftedVal = array.shift();
    // shiftedVal; => 1
    // array; => [ 2, 3, 4 ]

    let nextPrime = range.shift();

    //we then take this variable and push it into our
    primes.push( nextPrime );

    // .filter() will return an array with all the elements that pass the condition.
    range = range.filter( function( num ){
      // console.log(`num = ${num}`);
      // console.log(nextPrime);
      return num % nextPrime !== 0;

    });

    // ***************
    // .filter() example
    // ***************

    // let range = [1, 2, 3, 4, 1, 1, 2, 3, 5];
    // let filterResult = range.filter(function (num){ return num === 1 });
    // filterResult => [1, 1, 1];
    // Remember you MUST return the value or it will not be added to the array.



    // console.log(`range = ${range}`);

  }

  // console.log(primes);

};

sieve(120);


// ************************************************************
// Object approach
// to run this code you will need to comment out the first section.

const sieve = {

  // Variables that we will sort both our range of possible outcomes and the primes that we find along the way.
  range: [],
  primes: [],

  // method that will loop through and generate the range.
  makeRange: function( end ){
    for( let i = 2; i <= end; i ++ ){
      this.range.push( i );
    }
  // These returns aren't strictly necessary because we are actually modifying our storage arrays, but it is always good to have them in there anyway.
  return this.range;
  },


  // Filtering out the values that we know aren't a prime and returns an array of possible primes.
  filterPrimes: function( prime ){
    this.range = this.range.filter( function( num ){
      return num % prime !== 0;
    });

    return this.range;
  },

  // Repeat our single sorts for every prime
  makePrimes: function(){
    while( this.range.length > 0 ){
      var prime = this.range.shift();
      this.primes.push( prime );
      this.filterPrimes( prime );
    }
  },

  // Tie it all together.
  toPrime: function( end ){
    // Reset primes to an empty array every time we call this function so we know we are starting with a clean slate.
    // Note: We don't do this for this.range because it is self clearing.

    this.primes = [];
    this.makeRange( end );
    this.makePrimes();

    return this.primes;
  }
};


















































// const sieve = function( endPoint ){
//   let range = [];
//   for( let i = 2; i <= endPoint; i++ ){
//     range.push( i );
//   }
//   // console.log(range);
//
//   let primes = [];
//
//   while( range.length > 0 ){
//
//     let nextPrime = range.shift();
//     primes.push( nextPrime );
//
//     range = range.filter( function( num ){
//       return num % nextPrime !== 0;
//     });
//     console.log(`range = ${range}`);
//
//   }
//   console.log(primes);
//
// };
//
// sieve(100);
