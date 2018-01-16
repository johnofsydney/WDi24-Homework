console.log("connetced");

// Write function to compute Nth fibonacci number:

const fibo = {
  series: [1, 1, 2],
  add: function () {
    fibNext = this.series[this.series.length -1] + this.series[this.series.length -2]
    this.series.push(fibNext)
  },
  find: function(n) {
    while (this.series.length < n) {
      this.add()
    }
    return this.series[this.series.length -1]
  }
}



console.log(fibo.series);





$(document).ready( function() {
  console.log("ready");
})
