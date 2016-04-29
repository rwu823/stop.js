# Stop.js [![version](https://img.shields.io/npm/v/stop.js.svg?label=version)](https://www.npmjs.org/package/stop.js) [![Build Status](https://img.shields.io/travis/rwu823/stop.js.svg?branch=master)](https://travis-ci.org/rwu823/stop.js/) [![Coverage](https://img.shields.io/coveralls/rwu823/stop.js.svg)](https://coveralls.io/github/rwu823/stop.js)

The Promise base `setTimeout`, reduce your callback

## Why
In ES7 `async`/`await` is awesome, but that only supported with Promise.

## Setup
import `babel-polyfill` before use `async` and `await`


## Before
```js
console.log(1)
setTimeout(()=>{
  console.log(2) // slow than 5 secs
}, 5000)
```

## After

```js
import stop from 'stop.js'

async function asyncFunc() {
  console.log(1)
  await stop(5)
  console.log(2) // slow than 5 secs
}

asyncFunc()
```


## API

### stop([sec = 0])

`0` as default, it will calls [`setImmediate`](https://github.com/YuzuJS/setImmediate)
