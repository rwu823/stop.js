require('setimmediate')

module.exports = (sec = 0)=> {
  return new Promise((resolve, reject) => {
    if (sec) {
      setTimeout(resolve, sec * 1000)
    } else {
      setImmediate(resolve)
    }
  })
}
