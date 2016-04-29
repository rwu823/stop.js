# Stop.js

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

`0` as default, it will call [`setImmediate`](https://github.com/YuzuJS/setImmediate)
