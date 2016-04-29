import stop from '../src'

async function stopTest() {
  console.log(11)

  console.log(33)
  await stop(5)
  console.log(22)
}

stopTest()
