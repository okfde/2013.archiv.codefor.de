/**
 * Author: gnomjogson
 * Date: 30.09.13
 * Created: 13:29
 **/
(function(window){

    GoogleMaps.prototype.constructor = GoogleMaps;

    var ref, googlemap, $mapContainer,
    google_maps_position, google_maps_zoom, google_maps_markers,google_maps_icon;
    function GoogleMaps(pPos,pZoom,pMarkers,pIcon){
        ref = this;
        google_maps_position = pPos;
        google_maps_zoom = pZoom;
        google_maps_markers = pMarkers;
        google_maps_icon = pIcon;
        //google maps
        $mapContainer = $('#lab-map','.jumbotron');
        if($mapContainer.length>0){
            //we seem to have a map here
            google.maps.event.addDomListener(window, 'load', ref.initializeMap);
        }
    };

    GoogleMaps.prototype.initializeMap = function()
    {
        var map_canvas = document.getElementById('lab-map');
        //console.log("map_canvas -> " + map_canvas);

        var _index = google_maps_position.indexOf(',');
        var lat = parseFloat(google_maps_position.substr(0,_index-1));
        var long = parseFloat(google_maps_position.substr(_index+1,google_maps_position.length-1));
        var pos=new google.maps.LatLng(lat,long);

        var map_options = {
            center: pos,
            scrollwheel: false,
            mapTypeControl: false,
            zoom: google_maps_zoom,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "weight": 1 },
                        { "lightness": 20 },
                        { "color": "#96DBD6" }
                    ]
                },{
                    "featureType": "landscape.natural",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "landscape.natural",
                    "stylers": [
                        { "saturation": -100 }
                    ]
                },{
                    "featureType": "road.highway",
                    "stylers": [
                        { "visibility": "simplified" }
                    ]
                },{
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        { "weight": 1.2 },
                        { "lightness": 29 }
                    ]
                },{
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "saturation": -100 },
                        { "lightness": -20 }
                    ]
                },{
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "road.arterial",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "road",
                    "stylers": [
                        { "color": "#808080" }
                    ]
                },{
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },{
                    "featureType": "transit",
                    "elementType": "geometry.fill",
                    "stylers": [
                        { "saturation": -100 },
                        { "lightness": 31 }
                    ]
                }
            ]
        }
        googlemap = new google.maps.Map(map_canvas, map_options);
        google.maps.event.addListener(googlemap, 'click', function(event){
          this.setOptions({scrollwheel:true});
        });


        ref.addMarkers();
    };

    GoogleMaps.prototype.addMarkers = function()
    {



        for(var a=0;a<google_maps_markers.length;++a){
            var obj = google_maps_markers[a];
            var _index = obj.latlong.indexOf(',');
            var lat = parseFloat(obj.latlong.substr(0,_index-1));
            var long = parseFloat(obj.latlong.substr(_index+1,obj.latlong.length-1));
            var pos=new google.maps.LatLng(lat,long);

            var clickable;
            if(obj.url.length>0){
                clickable = true;
            } else clickable = false;

            //the marker
            var marker = new google.maps.Marker({
                position: pos,
                map: googlemap,
                icon: google_maps_icon,
                animation: google.maps.Animation.DROP,
                url: obj.url,
                clickable: clickable
            });

            //console.log("obj.url.length -----------> " + obj.url.length);

            if(obj.url.length>0){
                google.maps.event.addListener(marker, 'click', function() {
                    window.location.href = this.url;
                });
            }

            //the textbox
            var boxText = document.createElement("div");
            boxText.url = obj.url;
            if(obj.url.length>0){
                boxText.style.cssText = "white-space: nowrap;margin: 0px 8px;cursor:pointer;";
            } else boxText.style.cssText = "white-space: nowrap;margin: 0px 8px;";

            boxText.innerHTML = obj.text;

            var boxOptions = {
                content: boxText
                ,disableAutoPan: false
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(25, -43)
                ,zIndex: null
                ,closeBoxURL: ""
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,isHidden: false
                ,enableEventPropagation: true
                ,boxClass: "googleMapsInfoBox"
                ,position: marker.position
                ,pane: "floatPane"
            };

            var ibox = new InfoBox(boxOptions);
            ibox.open(googlemap, marker);
            if(obj.url.length>0){
                google.maps.event.addDomListener(boxText, 'click', function() {
                    window.location.href = this.url;
                });
            }
        }

    }

    window.GoogleMaps = GoogleMaps;

}(window));
