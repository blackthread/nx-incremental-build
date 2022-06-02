# typescript shorthands

https://www.markdownguide.org/cheat-sheet/
https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#ternary-operator

# Ternary operator

replaces the traditional if..else structur

```	
[condition] ? [true result] : [false result]
```
```	
const grade = 49;
const PASSED = "passed";
const FAILED = "failed";

if (grade >= 50) {
  return PASSED
} else {
  return FAILED
}

// use the ternary operator

return grade >= 50 ? PASSED : FAILED
```

# Short-circuit evaluation

this shorthand uses the logical OR operator || to assign a default value when the intended value is falsy.

```	
const myString = '';
let result;

if (myString !== null && myString !== undefined && myString != '') {
  result = myString
} else {
  result = 'default string'
}
// use the short-circuit evaluation
let str = ''
let finalStr = str || 'default string' 
```

# Nullish coalescing operator

this shorthand is similar to the short-circuit evaluation, it also assigns a default value to a variable.
The difference is that the nullisch coalescing operator only uses the default value when the intended value is 
also nullish.

```	
//ex1
let str = ''
let finalStr

if (str !== null && str !== undefined) {
  finalStr = 'default string'
} else {
  finalStr = str
}
// short circuit evaluation
let str = ''
let finaStr = str ?? 'default string' // result is ''

//ex2
let num = null
let actualNum

if (num !== null && num !== undefined) {
  actualNum = num
} else {
  actualNum = 0
}
// short circuit evaluation
let num = null
let actualNum = num ?? 0 // result is 0 because condition is nullish
```

# Template literals

```	
const name = 'James';
const hobby = 'spy';

const myString = name + ' likes to ' + hobby; // result 'James likes to spy'
// template literal
const myString = `{name} likes to {hobby}`;
const myString = `{name} likes to {hobby}
                    and shoot people.`

```

# Object property assignment shorthand

in javascript and typescript you can assign a property to an object in shorthand by mentioning the variable in the object literal. to do this the variable must be named with the intended key.

```

const obj = {
  firstName: 'James',
  lastName: 'Bond',
}
// object property assignment
const firstName = 'James'
const lastName = 'Bond'
const obj = { firstName, lastName }
```

# Optional chaining

we can read keys or values even when we are not sure whether they exist or are set. 
When the key does not exist, the value from optional chaining is undefined.

```

const obj = { 
 spy: {
      firstName: 'James',
      lastName: 'Bond',
      },
  foos: [
    'Ernst Stavro Blofeld',
    'Pussy Galore'
  ]
 
}

if (obj.hasProperty('foos') && foos.length >= 2) {
  console.log('2nd value in foos: ', obj.foos[1])
}
// optional chaining

console.log('2nd value in foos: ', obj.foos?.[1]) // 'Pussy Galore'
console.log('3rd value in foos: ', obj.others?.[2]) // undefined

```

# Object destructuring



```
const obj = {
  x: {
    y: 1,
    z: 2
  },
  other: 'test string'
}

console.log('Value of z in x: ', obj.x.z)
console.log('Value of other: ', obj.other)

// Object destructuring

const {x, other} = obj
const {z} = x

console.log('Value of z in x: ', z)
console.log('Value of other: ', other)

```
```
//rename the destructured variables

const obj = {x: 1, y: 2}
const {x: myVar} = object

console.log('My renamed variable: ', myVar) // My renamed variable: 1
```

# Spread Operator

the spread operator ... is used to access the content of arrays and objects. 

```
const arr = [1, 2, 3]
const biggerArr = [4,5,6].concat(arr)

const smallObj = {x: 1}
const otherObj = object.assign(smallObj, {y: 2})

// spread operator
const arr = [1, 2, 3]
const biggerArr = [...arr, 4, 5, 6]

const smallObj = {x: 1}
const otherObj = {...smallObj, y: 2}
```

# Object loop shorthand

```
for (let i = 0; i < x; i++) { … }
```

```

const arr = ['Yes', 'No', 'Maybe']

for (let i = 0; i < arr.length; i++) {
  console.log('Here is item: ', arr[i])
}

// for ... of to access the array entries

for (let str of arr) {
  console.log('Here is item: ', str)
}

// array.foreach to perform operations on the array elements and their indexes using a callback function

arr.forEach((str) => {
  console.log('Here is item: ', str)
})

// for ... in to access the indexes of an array and the keys when used on an object literal

for (let index in arr) {
  console.log(`Item at index ${index} is ${arr[index]}`)
}

// for ... in in object literals
const obj = {a: 1, b: 2, c: 3}

for (let key in obj) {
  console.log(`Value at key ${key} is ${obj[key]}`)
}
```

# casting values to boolean with !!

you can cast any type to a boolean using the !![variable] syntax

```
const simpleInt = 3
const intAsBool = Boolean(simpleInt)

// using !! 
let simpleInt = 3
let intAsBool = !!simpleInt // true

simpleInt = 0
intAsBool = !!simpleInt // false

```


# Arrow / Lambda function expression

Functions in javascript can be written using arrow function instead of the traditional function expression.
Arrow functions are similar to lambda functions in other languages.

```
function printStr(str) {
  console.log('This is a string: ', str)
}
printStr('Girl!')

// arrow function

// Shorthand TypeScript (specifying variable type)
const printStr = (str: string) => {
  console.log('This is a string: ', str)
}
printStr('Girl!')

```

```
function capitalize(name) {
  return name.toUpperCase()
}

function add(numA, numB) {
  return numA + numB
}

// arrow function 
const capitalize = (name: string) => name.toUpperCase()

const add = (numA: number, numB: number) => (numA + numB)
```

# Typescript constructor shorthand

```
class Person {
  private name: string
  public age: int
  protected hobbies: string[]

  constructor(name: string, age: int, hobbies: string[]) {
    this.name = name
    this.age = age
    this.hobbies = hobbies
  }
}

// constructor shorthand

class Person {
  constructor(
    private name: string,
    public age: int,
    protected hobbies: string[]
  ) {}
}
```