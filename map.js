// Array squad
const input = [1, 2, 3, 4, 5]

let result = input.map((x) => x * x)

let secondResult = input.map((x) => Math.pow(x, 2))

/*
// 
*/

// Sum of all positive numbers
const nums = [1, -4, 12, 0, -3, 29, -150]
let sum = nums.reduce((num, curr) => {
  if (curr >= 0) {
    num += curr
  }
  return num
}, 0)

let secondSum = nums.filter((x) => x >= 0).reduce((acc, curr) => acc + curr, 0)

/*
// 
*/

// Median and Mean
const values = [12, 46, 32, 64]

let median = values.reduce(
  (acc, curr, index, array) => {
    acc.mean += curr / array.length

    if (Math.abs(index + 1 - array.length / 2) < 1) {
      acc.median = curr
    }
    return acc
  },
  { mean: 0, median: 0 }
)

console.log(median)
