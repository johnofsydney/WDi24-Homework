nums = [3, 6, 3, 1, 6, 7, 8, 10]

// def bubble_sort(arr)
//   # Returns a new array with the same element but in sorted order
// end
//
// p bubble_sort(nums)

// or

const bubbleSort = function (arr) {
  // Returns a new array with the same element but in sorted order

  for (var i = 0; i < arr.length - 1; i++) {
    let a = arr[i]
    let b = arr[i+1]
    while (a > b) {
      arr[i] = b
      arr[i+1] = a

    }
  }

  return arr



}

console.log( bubbleSort(nums) )
