var cache = require('memory-cache')

function solve(a, aplusb, aplusc) {
  equationCache = cache.get(a+aplusb+aplusc)
  // console.log(equationCache)
  if(equationCache == null) {
    b = parseFloat(aplusb)-parseFloat(a)
    c = parseFloat(aplusc)-parseFloat(a)
    // console.log(`${b} ${c}`)
    result = {
      b : b,
      c : c
    }
    cache.put(a+aplusb+aplusc, result, 3600000)
    return result
  } else {
    // console.log('Cache used')
    return cache.get(a+aplusb+aplusc)
  }
}

module.exports = {
  solve
}
    
