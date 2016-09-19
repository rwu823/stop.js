import stop from '../'

const setup = async function(ms) {
  const start = new Date()
  await stop(ms)
  const end = new Date()
  return end - start
}

it('should be run as series', async()=> {
  const res = await setup(1000)

  expect(res).toBeGreaterThan(987)
})

it('should be run as series, pass number string', async()=> {
  const res = await setup('1000')

  expect(res).toBeGreaterThan(987)
})

it('should be thrown error, pass any string', async()=> {
  expect(()=> {
    stop('d+2000')
  }).toThrowError(/is not a valid number/)
})

it('pass 0, calls setImmediate', async()=> {
  const res = await setup(0)
  expect(res).toBeLessThan(9)
})

it('pass nothing, calls setImmediate', async()=> {
  const res = await setup()
  expect(res).toBeLessThan(9)
})
