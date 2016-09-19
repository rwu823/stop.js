import 'setimmediate'

export default (ms) => {
  if (isNaN(ms || 0)) throw new Error(`${ms} is not a valid number`)

  return new Promise(resolve => {
    if (ms) {
      setTimeout(resolve, ms)
    } else {
      setImmediate(resolve)
    }
  })
}
