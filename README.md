# msvcrt-rand

the pseudorandom number generator used in Microsoft C Runtime's rand() function

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/msvcrt-rand.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/msvcrt-rand
[travis-image]: https://img.shields.io/travis/goto-bus-stop/msvcrt-rand.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/msvcrt-rand
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install msvcrt-rand
```

## Usage

```js
var rand = require('msvcrt-rand')

rand()
rand()
```

Seed the generator:

```js
rand.seed(Date.now())
```

Create a new generator, with its own seed and its own state:

```js
var make = require('msvcrt-rand/make')
var rand1 = make(Date.now())
var rand2 = make(Date.now())

rand1()
rand2() // this doesn't interfere with `rand1` state.
rand1()
```

## License

[Apache-2.0](LICENSE.md)
