

const grains = {

  // create range of number = board

  // Generate a board to represent our imaginary chessboard.
  // Underscore's '.range' makes this pretty easy for us => http://underscorejs.org/#range
  // 1 is our starting index, 65 is actually the value where the range stops (we want 64)
  board: function(){
    return _.range(1, 65);
  },

  // create a function that can an arg and use that as the exponent

  // Math.pow takes a base as the first argument, and an exponent as the second. => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
  // We want exponents of 2, and we want it to reference the *previous* index on the board, so we always knock 1 off the given number.

  square: function( num ){
    return Math.pow( 2, num - 1 );
  },

  // create an array that holds all the numbers

  // _.each expects a list as a first argument, and a function as a second to work with that list. => http://underscorejs.org/#each

  // In this case, I rely on the `board` function to immediately create an array from [1, ..., 64], then begin iterating it.
  // Within the _.each `this` is no longer bound to the grains object. Fortunately, we can just reference the object directly, hence 'grains.square'

  boardSums: function (){
    let output = [];
    _.each(this.board(), function( boardIndex ){
      output.push( grains.square( boardIndex ));
    })
    return output;
  },

  // Add all the numbers together

  // _.reduce expects a list, a function to process that list, and an optional parameter called a 'memo' => http://underscorejs.org/#reduce
  // Sum refers to that starting memo (beginning at 0), num refers to the value of the current index.
  // For all of the numbers, we add them to the total sum
  totalSum: function (){
    return _.reduce( this.boardSums(), function( sum, num ) {
      // console.log(sum);
      // console.log(num);
      return sum + num;
    });
  }
};
