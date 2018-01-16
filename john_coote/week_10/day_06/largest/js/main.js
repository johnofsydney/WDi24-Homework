// Find the largest int value in an int array.

a = [22,44,4,3,66,7,8,986]
max = a[0]


console.log("conected");

for (var i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i]
  }
}

console.log(max);


$(document).ready( () => {
  console.log("ready");
})
