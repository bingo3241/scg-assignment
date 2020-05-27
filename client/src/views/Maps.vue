<template>
    <div>
        <br>
        <h1>Central Wolrd to SCG Bang Sue</h1>
        <br>
        <div id='maps' class='map'/>
        <br>
        <p v-for="leg in legs" :key="leg.html_instructions">
            <span v-html="leg.html_instructions"></span>
        </p>
    </div>
</template>

<script>
import gmapsInit from '../utils/gmaps';
// import MapsService from '../services/MapsService'
import axios from "axios"

export default {
    data() {
        return {
            legs: null
        }
    },
    async mounted() {
        if(localStorage.legs) {
            this.legs = localStorage.legs
        } else {
            await axios.get("http://localhost:8000/maps").then(res => {  
            // console.log(res.data)
            this.legs = res.data
             })
        }
        const google = await gmapsInit();
        const map = new google.maps.Map(document.getElementById('maps'));
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        
        var start = 'เซ็นทรัลเวิลด์';
        var end = 'SCG+สำนักงานใหญ่+บางซื่อ';
        var request = {
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        };

        directionsService.route(request, function(result, status) {
            if (status == 'OK') {
            directionsRenderer.setDirections(result);
            }
        });
        
    },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.map {
    height: 100vh;
    width: 100vw;
}
</style>