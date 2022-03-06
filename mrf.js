const arr = [5, 1, 3, 2, 6]

// filter
const output = arr.filter((x) => x > 4)
// console.log(output)

// using forEach to get same result
arr.forEach((value) => {
  if (value > 4) {
    // console.log(value)
    // document.write(value + '<br>')
  }
})

// heavy reduce
function findSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
// console.log(findSum(arr))

// getting same result with reduce
const totalSum = arr.reduce((acc, curr) => {
  acc += curr
  return acc
}, 0)
// console.log(totalSum)

// finding max value
function findMax(arr) {
  let maxValue = 0
  for (i = 0; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i]
    }
  }
  return maxValue
}
// console.log(findMax(arr))

// getting same value with reduce
const maxIndex = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr
  }
  return acc
}, 0)
// console.log(maxIndex)

// ====================
// real life examples
let people = [
  { firstName: 'Michael', lastName: 'Brown', age: 26 },
  { firstName: 'John', lastName: 'Doe', age: 75 },
  { firstName: 'Benard', lastName: 'Gustof', age: 50 },
  { firstName: 'Abraham', lastName: 'Lincoln', age: 26 },
]

let fullNames = people.map((person) => person.firstName + ' ' + person.lastName)
// console.log(fullNames)

// more difficult
let quantity = people.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++
  } else {
    acc[curr.age] = 1
  }
  return acc
}, {})
// console.log(quantity)

let youngMen = people.filter((person) => person.age < 30).map((person) => person.firstName)

// using reduce
let reducedData = people.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName)
  }
  return acc
}, [])

console.log(reducedData)
