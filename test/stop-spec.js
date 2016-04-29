import test from 'ava'
import stop from '../src'

test('should be run as series', async (assert)=> {
  const start = new Date()
  await stop(2)
  const end = new Date()

  assert.truthy(end - start >= 2000)
})

test('pass 0, calls setImmediate', async(assert)=> {
  const start = new Date()
  await stop(0)
  const end = new Date()
  assert.truthy(end - start < 17)
})

test('pass nothing, calls setImmediate', async(assert)=> {
  const start = new Date()
  await stop()
  const end = new Date()
  assert.truthy(end - start < 17)
})
