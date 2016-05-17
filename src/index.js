require('setimmediate')

module.exports = (ms = 0)=> {
  let _ms = ms

  if (isNaN(_ms)) throw new Error(`${ms} is not a valid number`)
  
  return new Promise((resolve, reject) => {
    if (_ms) {
      setTimeout(resolve, _ms)
    } else {
      setImmediate(resolve)
    }
  })
}
