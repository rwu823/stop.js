import stop from '../src'

async function stopTest() {
  console.log(1)
  await stop(2000)
  console.log(2)
}

stopTest()
