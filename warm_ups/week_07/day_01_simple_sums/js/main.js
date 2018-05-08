// const s1 = function( num ) {
//
//   let output = 1;
//
//   for ( let i = 0; i < num; i++ ){
//
//     if ( i % 2 === 0 ){
//
//       output--;
//
//     } else {
//
//       output++;
//
//     }
//
//   }
//
//   return output;
//
// };
//
// console.log(s1( 10 ));
// console.log(s1( 9 ));
//
//
// const s2 = function( num ){
//
//   let previousStep = 0;
//
//   for ( let i = 1; i <= num; i++ ){
//
//     previousStep += i;
//
//   }
//
//   return previousStep;
//
// };
//
// console.log( s2( 4 ) );
// console.log( s2( 10 ) );

// BONUS


const s1 = function( num ){

  return num % 2 ? 0 : 1;

};

console.log(s1( 10 ));
console.log(s1( 9 ));


const s2 = function( num ){

  return ( num * (num + 1) ) / 2 ;

};

console.log(s2( 4 ));
console.log(s2( 10 ));

// if anyone actually reads this and comes to me I will give them a free coffee.

// I reserve the right to give no coffee as a prize
