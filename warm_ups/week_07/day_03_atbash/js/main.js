const atbash = {

  alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  encode: function( input ){

    let output = '';
    const str = input.toLowerCase().split('');

    for ( let i = 0; i < str.length; i++ ){

      const index = this.alphabet.indexOf( str[i] );
      // console.log( `The index of ${ str[i] } is ${ index }` );

      output += this.alphabet.reverse()[index];

    }
    return output;
  }

};

console.log(atbash.encode("TEST"));
console.log(atbash.encode("gvhg"));
console.log(atbash.encode("wizard"));
