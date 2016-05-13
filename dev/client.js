import stop from '../src'

async function stopTest() {
  console.log(11)
  await stop(5000)
  console.log(22)
}

stopTest()
