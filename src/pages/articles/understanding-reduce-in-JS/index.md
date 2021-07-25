---
path: "/understanding-reduce"
title: "Understanding reduce in Javascript"
intro: "Understanding reduce in Javascript"
order: 3
cover: "./reduce-code-snippet.png"
type: "learning notes"
themeColor: "#FFE885"
date: "20.01.20"
---

# Understanding reduce in Javascript

Reduce is a higher order javascript function that you can use to manipulate arrays. It takes in two main values, an **accumulator** and a **current value.** The function repeatedly takes a single element from an array(**current value**) and combines that with the **accumulator** **.**

Reduce functions are particularly handy when map, filter or reject aren't suitable. So let's dive in and look at some examples to see how it works.

## Adding array values

Let's say we have the following array of numbers and we want to add them together to get a total.

```jsx
const myArray = [9, 42, 2, 23]
```

We can create a reducer function called `myReducer` which we then later call. This function will take in two values: `acc`, our accumulator and `val` which is our current value.

```jsx
const myReducer = (acc, val) => {
  return acc + val
}

myArray.reduce(myReducer, 0)
// returns 76
```

This function when called will take in the current value(0) and add it to the first value which will then become the value of the accumulator. It will then continue to loop through rest of the array combining the accumulator and the each value of the array.

```jsx
// This is what happening inside the function

// acc = 0 (0 is passed in as the second argument to the function)

// 1st loop
// acc(0) + val(9) = 9
// acc = 9

// 2nd loop
// acc(9) + val(42) = 51
// acc = 51

// 3rd loop
// acc(51) + val(2) = 53
// acc = 53

// 4th loop
// acc(53) + val(23) = 76

// Function stops and returns 76
```

If your array contains more than one element, you can leave off the second argument. This will then take the first element of an array as its starting value and start reducing with its second.

```jsx
myArray.reduce(myReducer)
```

## Find the smallest value in an array

Let's stick with `myArray` and find out what is the smallest number in the array. Here we'll create a function called `findSmallest`. It will take the first item the array and then compare it to the second. It will return the lowest value to the accumulator. Then it will repeating comparing the rest of the values in `myArray` until you are left with lowest number.

```jsx
const myArray = [9, 42, 2, 23]

// Finding the smallest in an array
const findSmallest = (acc, init) => {
  if (acc < init) {
    return acc
  } else {
    return init
  }
}

myArray.reduce(findSmallest)
// returns 2
```

## Flattening arrays

Let's say we have a bunch of arrays and we want to combine them into a single array. Well we can use reduce to do that.

```jsx
const arrayOfArrays = [["101", "72", "1"], [false], [9, 12, 2]]
```

We can create a function (squashArrays) that can take the first array, concatenate with the second and repeat.

```jsx
const squashArrays = (acc, array) => {
  return acc.concat(array)
}

arrayOfArrays.reduce(squashArrays)
// returns ["101", "72", "1", false, 9, 12, 2]
```

These are just a few examples in which the reduce can simplify working with arrays. Understanding reduce can help you write efficient, reusable, functions especially when working with state management such as Redux.

<br>
<br>
