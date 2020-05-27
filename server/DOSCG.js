const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Client, Status} = require("@googlemaps/google-maps-services-js");
var cache = require('memory-cache')

const equation = require('./functions/equation')
const sequence = require('./functions/sequence')

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

app.get('/equation', (req, res) => {
  // console.log('equation')
  result = equation.solve(req.query.a, req.query.aplusb, req.query.aminusc)
  res.send(result)
});

app.get('/sequence', (req, res) => {
  // console.log('sequence')
  result = sequence.solve()
  res.send(result)
});

app.get('/maps', (req, res) => {
  var client = new Client();
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
                result = r.data.routes[0].legs[0].steps
                // console.log(result)
                cache.put('routes', result, 3600000) //Cache will expire in 1 hour
                res.send(result)
              }
        }).catch(e => {
            console.log(e)
        })
    } else {
        console.log('cache used')
        res.send(routeCache)
    }
})

// listen on the port
app.listen(port, () => console.log(`Hi! Server is listening on port ${port}`));