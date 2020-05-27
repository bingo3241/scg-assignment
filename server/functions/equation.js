var cache = require('memory-cache')

function solve(a, aplusb, aminusc) {
  equationCache = cache.get(a+aplusb+aminusc)
  // console.log(equationCache)
  if(equationCache == null) {
    b = parseFloat(aplusb)-parseFloat(a)
    c = parseFloat(a)-parseFloat(aminusc)
    // console.log(`${b} ${c}`)
    result = {
      b : b,
      c : c
    }
    cache.put(a+aplusb+aminusc, result, 3600000)
    return result
  } else {
    // console.log('Cache used')
    return cache.get(a+aplusb+aminusc)
  }
}

module.exports = {
  solve
}
    
