require('setimmediate')

module.exports = (ms = 0)=> {
  if (isNaN(ms)) throw new Error(`${ms} is not a valid number`)
  
  return new Promise(resolve => {
    if (ms) {
      setTimeout(resolve, ms)
    } else {
      setImmediate(resolve)
    }
  })
}
