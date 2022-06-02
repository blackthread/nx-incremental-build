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