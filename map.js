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

/*
// 
*/

// Get name initials
const names = 'George Raymond Martin'

let res = names
  .split(' ')
  .map((name) => name[0])
  .join('.')

/*
// 
*/

// Age difference between youngest and oldest
const ages = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jenifer', age: 65 },
]

const ageValues = ages.map((x) => x.age)
const difference = [
  Math.min(...ageValues),
  Math.max(...ageValues),
  Math.max(...ageValues) - Math.min(...ageValues),
]
// console.log(difference)

const sentence = 'Every developer likes to mix kubernetes and javascript'
const createNumeronym = (word) => word[0] + (word.length - 2) + word[word.length - 1]

let eligible = sentence
  .split(' ')
  .reduce((acc, curr) => {
    curr.length > 3 ? acc.push(createNumeronym(curr)) : acc.push(curr)
    return acc
  }, [])
  .join(' ')
// console.log(eligible)

// more difficulty

// getting the factorial of any number
const factorial = 6

let answer = new Array(factorial)
  .fill(null)
  .map((curr, index) => index + 1)
  .reduce((acc, curr) => acc * curr)

// determining the number of times a particular letter occurs in an array
const data = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
]

let final = data.flat().reduce((acc, curr) => {
  acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1)
  return acc
}, {})

// Return the longest word in a supplied string
const words = 'Web Development Tutorial'

let done = words.split(' ').reduce((acc, curr) => {
  if (acc.length < curr.length) {
    acc = curr
  }
  return acc
})
