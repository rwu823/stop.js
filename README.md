[![version](https://img.shields.io/npm/v/stop.js.svg?label=version)](https://www.npmjs.org/package/stop.js) [![Build Status](https://img.shields.io/travis/rwu823/stop.js.svg?branch=master)](https://travis-ci.org/rwu823/stop.js/) [![Coverage](https://img.shields.io/coveralls/rwu823/stop.js.svg)](https://coveralls.io/github/rwu823/stop.js)

# Stop.js
The Promise based `setTimeout` and `setImmediate` for the modern browsers and node.

## Browser Supported

![](https://raw.githubusercontent.com/rwu823/stop.js/master/assets/supported-browsers.png)

## Why
In ES7 `async`/`await` is awesome, but that only supported with Promise.

## Setup
Include `babel-polyfill` before use `async` and `await`


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
  await stop(5000)
  console.log(2) // slow than 5 secs
}

asyncFunc()
```

## setImmediate
`0` is default, it will calls [`setImmediate`](https://github.com/YuzuJS/setImmediate) library

```js
console.log(1)
setImmediate(()=>{
  console.log(2)
})
```

same as

```js
console.log(1)
await stop(0)
console.log(2)
```

or pass nothing

```js
console.log(1)
await stop()
console.log(2)
```

## API

### stop([ms = 0])
