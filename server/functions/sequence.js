var cache = require('memory-cache')

var lists = [null, null, 5, 9, 15, 23, null]
var dif = Array(lists.length-1).fill().map((_, i) => 2*i);

function solve() {
    sequenceCache = cache.get('sequence')
    if( sequenceCache == null) {
        while(lists.includes(null)) {
            for(let i=0; i<lists.length; i++) {
                if(lists[i] == null && lists[i-1] != null) {
                    lists[i] = lists[i-1]+dif[i-1]
                } else if (lists[i] == null && lists[i+1] != null) {
                    lists[i] = lists[i+1]-dif[i]
                }   
            }
        }
        var result = {
            x: lists[0],
            y: lists[1],
            z: lists[6]
        }
        cache.put('sequence', result, 3600000) //Cache will expire in 1 hour
        // console.log(result)
        return result
    } else {
        console.log('cache used')
        return sequenceCache
    }
}

module.exports = {
    solve
}