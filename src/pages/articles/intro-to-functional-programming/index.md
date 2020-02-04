---
path: "/intro-to-functional-programming"
title: "Intro to Functional Programming in Javascript"
intro: "Writing more efficient functions with functional programming"
order: 2
cover: "./two.jpg"
---

# Intro to Functional Programming in Javascript

Since starting to learn front-end web development I've heard about the concept of functional programming. As my projects increase in complexity, functional programming sounded like something that would make my code simpler and save alot of headaches. So what is it?

Functional programming is a style of writing code and an approach where functions are king. It makes your code safer and easier to debug. Also by writing code in a more modular way, it can be reused elsewhere and reduce the total amount of code written. The best way to understand what it's about, is to give you an example.

Let's say you have the following array of pets:

    const dogsList = ["Paddle", "Hachicko", "Michelle", "Dudley", "Buddy"];

Let's say we wanted to count the number of dogs in dogsList. A non-functional way could be:

    // Non-functional
    const countDogs = () => {
      return dogsList.length;
    };

    countDogs();
    // Result 2

Although this would return the result we'd want we are referring to globally defined variable inside the countDogs function. This is not functional because functional functions do nothing but take an input and return an output. So how can we do this in a functional way?

    // Functional
    const countAnimals = (animals) => {
      return animals.length
    }

    countAnimals(dogsList)
    // Result 2

So this time we've created a function called countAnimals. It takes in an array of animals and returns the length of that array. Then we call the countAnimals function inputting dogsList. By turning this into a pure function we can now use this function elsewhere in our project if we needed to count other arrays of animals. Also this function is now arguably easier to test as we if pass in a specific input you'll get a specific output.

## Functional Programming principles

To ensure your code is written in a functional simple follow these principles:

**Use pure functions to avoid side effects**

Pure functions don't rely on data outside the current function and don't change anything outside the function. This way you know when you know if you pass in a certain input you'll get a specific output.

**Treat all data as immutable**

By treating all data as immutable we can avoid a lot of unwanted bugs. By using ES6 features such as map, filter or forEach you can easily avoid data mutation. If you need to change state, create new state to protect it.

**Write functions in a modular way**

Writing functions is a small and focused way will allow them to be reused elsewhere in your project. These functions can then be composed together using higher order functions.
