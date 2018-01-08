console.log("connected");

// # The prime factors of 13195 are 5, 7, 13 and 29.
// #
// # What is the largest prime factor of the number 600851475143 ?
//
// max_number = 30
//
// def is_prime(num)
//   test_array = (2..Math.sqrt(num)).to_a
//   test_array.each do |x|
//     if num % x == 0
//       return false
//     # else
//     #   return true
//     end
//   end
//   return true
// end
//
// def factors(num)
//   facts = []
//   num_array = (2..Math.sqrt(num)).to_a.reverse
//   # print num_array
//   num_array.each do |x|
//     if num % x == 0 && is_prime(x)
//       return x
//     end
//   end
// end

const isPrime = function(num) {
  numRooted = Math.round(Math.sqrt(num));
  // const testArray = Array.from(new Array(numRooted),(val,index)=>index+1);
  // console.log(testArray);
  for (var i = 2; i < numRooted; i++) {
    if (num % i === 0) {
      return false; // num has a factor therefore is not prime
    }
    return true; // num has no factors, therefore kjust be prime
  }
};

const factors = function(num) {
  numRooted = Math.round(Math.sqrt(num));
  console.log(num);
  console.log(numRooted);
  // const numArray = Array.from(new Array(numRooted),(val,index)=>index+1);
  for (var i = 2; i < numRooted; i++) {
    if (num % i === 0) {
      console.log(i);
    }
    console.log("blah", i);
  }
};

factors(60);
