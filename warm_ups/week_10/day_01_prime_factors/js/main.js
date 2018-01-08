const prime = {
  range: [],
  primeRange: [],
  primeFactorRange: [],

  getRange: function( num ){
    this.range = [];
    for( let i = 2; i <= num; i++ ){
      this.range.push( i );
    }
    return this.range;
  },

  getPrimeRange: function( arr ){
    this.primeRange = [];
    for (let i = 0; i < arr.length; i++) {
      let isPrime = true;
      let potentialPrime = arr[i];

      for( let j = 2; j < potentialPrime; j++ ){
        if( potentialPrime % j === 0 ){
          isPrime = false;
          break;
        }
      }
      if( isPrime ){
        this.primeRange.push( potentialPrime );
      }
    }
    return this.primeRange;
  },

  getPrimeFactorRange: function( num ){
    this.primeFactorRange = [];

    const numPrimes = prime.getPrimeRange( prime.getRange( num ) );
    for( let i = 0; i < numPrimes.length; i++ ){
      while( num % numPrimes[i] === 0 ){
        this.primeFactorRange.push( numPrimes[i] );
        num /= numPrimes[i];
      }
    }
    return this.primeFactorRange;
  }

};

console.log( prime.getPrimeFactorRange( 60 ) );
