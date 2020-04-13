require('babel-runtime/regenerator')
require('./main.css')
require('./index.html')

var a = async (args) => {
  const {a, b} = args
  await console.log('hello arrow functions', a, b)
  console.log('done')

}

// a({a: 1, b:2})