# ES6 Basics

Welcome to the ES6 Basics project at Holberton School. This project covers the fundamental concepts of ECMAScript 6 (ES6), the latest version of JavaScript. ES6 introduces several new features and syntax improvements that make JavaScript more powerful and easier to work with.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Examples](#examples)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

## Introduction

ECMAScript 6 (ES6) is a significant update to the JavaScript language, providing new syntax and features that improve code readability, maintainability, and performance. This project aims to help you understand and apply these new features in your JavaScript code.

## Features

Some of the key features of ES6 include:

- Arrow Functions
- Classes
- Template Literals
- Destructuring Assignment
- Default Parameters
- Rest and Spread Operators
- Promises
- Modules
- Enhanced Object Literals
- Let and Const

## Getting Started

To get started with ES6, you will need a modern web browser or a JavaScript runtime like Node.js that supports ES6 features. You can also use a transpiler like Babel to convert ES6 code to ES5 for compatibility with older environments.

## Examples

Here are some examples of ES6 features:

### Arrow Functions

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

### Classes

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const john = new Person('John');
john.greet(); // Output: Hello, my name is John
```

## Resources

- [MDN Web Docs: ECMAScript 6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [ES6 Features](https://github.com/lukehoban/es6features)
- [Babel](https://babeljs.io/)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.