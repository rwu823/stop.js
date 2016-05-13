import test from 'ava'
import stop from '../src'

test('should be run as series', async(assert)=> {
  const start = new Date()
  await stop(2000)
  const end = new Date()
  const res = end - start

  assert.true(res >= 1888, `${res} should be >= 2000`)
})

test('should be run as series, pass number string', async(assert)=> {
  const start = new Date()
  await stop('2000')
  const end = new Date()
  const res = end - start

  assert.true(res >= 1888, `${res} should be >= 2000`)
})

test('should be thrown error, pass any string', async(assert)=> {
  assert.throws(()=> {
    stop('d+2000')
  }, /is not a valid number/)
})

test('pass 0, calls setImmediate', async(assert)=> {
  const start = new Date()
  await stop(0)
  const end = new Date()
  assert.true(end - start < 17)
})

test('pass nothing, calls setImmediate', async(assert)=> {
  const start = new Date()
  await stop()
  const end = new Date()
  assert.true(end - start < 17)
})
