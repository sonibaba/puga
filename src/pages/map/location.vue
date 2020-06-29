<template>
    <div>
        <!-- <div ref="googleMap" id="map"></div> -->
        <q-parallax>
      <template v-slot:media>
        <img src="../../assets/mapa.png">
      </template>
    </q-parallax>
      </q-img>
        <div class="q-pt-none q-pr-none q-gutter-xl">
          <q-banner class="bg-white-8 text-black">
            <p class="text-center text-h4 text-secondary my-font">Dirección:</p>
            <p class="text-center text-secondary my-font">Av. Ciro Purata #100 Col. Cuauhtémoc CP 79040 <br> Ciudad Valles, San Luis Potosi</p>
            <p class="text-center text-secondary my-font"> <b> Teléfono: </b> (481)-3818097</p>
          </q-banner>
        </div>
    </div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnFmBvpH5i_riEHfRItdotctU7xAjGKHQ"></script>
<script>
    export default {
        data() {
            return {
                ceoz: {
                    lat: 21.9925241,
                    lng: -99.0281821
                },
                latitude: 0,
                longitude: 0,
                destination: {},
                map: null,
                counter: 0,
                marker: null,
                infoWindow: new google.maps.InfoWindow,
                newmarker: null,
                counter: 0
            };
        },

        mounted() {
            document.addEventListener("deviceready", onDeviceReady, false);

            function onDeviceReady() {
                console.log("navigator.geolocation works well");
            }
            this.getMap()
        },

        methods: {
            getMap() {
                const mapContainer = this.$refs.googleMap
                var directionsRenderer = new google.maps.DirectionsRenderer();
                var mapOptions = {
                    zoom: 8
                }
                this.map = new google.maps.Map(mapContainer, mapOptions);
                directionsRenderer.setMap(this.map);
                this.newmarker = new google.maps.Marker();
                this.addMarkerDestination()
            },
            addMarkerDestination() {
                this.marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: this.ceoz
                });
                this.marker.setMap(this.map)
                this.location()
            },
            addNewMarker(position) {
                this.newmarker.setMap(this.map)
                this.newmarker.setPosition(position)
                this.newmarker.setLabel('Tu')
                
                setInterval(() => {
                    this.counter += 1
                    if(this.counter == 1){
                        this.map.setCenter(this.newmarker.position)
                        this.map.setZoom(15)
                    }
                }, 1500);
                
                // this.newmarker.setMap(null)
            },
            calculateAndDisplayRoute: function (position) {
                this.latitude = position.coords.latitude
                this.longitude = position.coords.longitude
                this.destination = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var service = new google.maps.DirectionsService();
                var renderer = new google.maps.DirectionsRenderer({
                    map: this.map
                });
                this.map.setCenter(this.destination)
                service.route({
                    origin: this.ceoz,
                    destination: this.destination,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        renderer.setDirections(response);
                    } else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
                //this.watchMapPosition()
            },
            onError: function(errorObj){
                alert(errorObj.code + ": " + errorObj.message);
            },
            /*onMapWatchSuccess: function (position) {
                var updatedLatitude = position.coords.latitude;
                var updatedLongitude = position.coords.longitude;

                if (updatedLatitude != this.Latitude && updatedLongitude != this.Longitude) {
                    var latLong = {
                        lat: updatedLatitude,
                        lng: updatedLongitude
                    }
                    this.newmarker.setMap(null)
                    this.addNewMarker(latLong);
                }
            },*/
            /*watchMapPosition() {
                navigator.geolocation.watchPosition(this.onMapWatchSuccess, this.onError, {
                    enableHighAccuracy: true
                });
            },*/
            location() {
                navigator.geolocation.getCurrentPosition(this.calculateAndDisplayRoute, this.onError,{enableHighAccuracy: true, maximumAge: 10000});
            }
        }
    };
</script>
<style>
    #map {
        width: 100%;
        height: 550px;
        background-color: grey;
    }
</style>