console.log("connected");


// A happy number is defined by the following process:
//
// Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and
// repeat the process until
// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those for which this process do not end in 1 are unhappy numbers.



const happy = function (num) {

  strNum = num.toString();
  arrNum = strNum.split('')
  let s = 0
  let x = 0

  for (var i = 0; i < arrNum.length; i++) {
    x = parseInt(arrNum[i])
    s += ( x * x)
    console.log(x, s);
    if (s === 1) {
      console.log("success");
    } else {
      happy (s)
    }
  }
}


$(document).ready(function() {
  console.log("ready");
});
