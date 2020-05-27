const {Client, Status} = require("@googlemaps/google-maps-services-js");
var cache = require('memory-cache')

const client = new Client({});

async function getRoute() {
    routeCache = cache.get('route')
    if(routeCache == null) {
        client.directions({
            params: {
                origin: [13.7466356,100.5371464], //CentralWorld
                destination: [13.8058845,100.535343], //SCG
                key: 'AIzaSyDdoZ0e9-cOe21gTxU89s4xF2EgRh3I9jQ'
            }
        }).then(r => {
            if (r.data.status === Status.OK) {
                // console.log(r.data.routes[0].legs[0].steps)
                result = r.data.routes[0].legs[0].steps
                cache.put('route', result, 3600000) //Cache will expire in 1 hour
                return result
              }
        }).catch(e => {
            console.log(e)
        })
    } else {
        console.log('cache used')
        return routeCache
    }
    
    
}

module.exports = {
    getRoute
}

