/**
 * Author: gnomjogson
 * Date: 30.09.13
 * Created: 13:29
 **/
(function(window){

    GoogleMaps.prototype.constructor = GoogleMaps;

    var ref, googlemap, $mapContainer,
    google_maps_position, google_maps_zoom, google_maps_markers, google_maps_icon, google_maps_page,
    markerArray,highestZIndex,opac;
    function GoogleMaps(pPos,pZoom,pMarkers,pPage){
        ref = this;
        google_maps_position = pPos;
        google_maps_zoom = pZoom;
        google_maps_markers = pMarkers;
        google_maps_page = pPage;

        highestZIndex = 0;
        opac = 0.7;

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

        google.maps.event.addListenerOnce(googlemap, 'idle', function(){
            ref.alignMarkers();
        });

        ref.addMarkers();
    };

    GoogleMaps.prototype.alignMarkers = function()
    {
        for(var a=0;a<markerArray.length;++a){
            var marker = markerArray[a];
            var ibox = marker.ibox;
            /*when map is fully loaded we reposition map markers based
              on their markerpositionsettings from lab config
             */
            if(google_maps_page == "home"){
                var width = $('.markerInfoBox_'+a,"#lab-map").width();
                var markerposition = marker.obj.markerposition;
                if(markerposition == "left"){
                    var pixelOffset = new google.maps.Size((16+width)*-1, -31);
                    ibox.setOptions({'pixelOffset':pixelOffset});
                }
            }

            //done alignment, lets show the boxes
            if(google_maps_page == "home"){
                $('.markerInfoBox_'+a,"#lab-map").css('opacity',opac);
            } else $('.markerInfoBox_'+a,"#lab-map").css('opacity',1);


        }
    }

    GoogleMaps.prototype.addMarkers = function()
    {

        markerArray = [];

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

            if(google_maps_page == "home" ) {
                
                if( obj.h4c == 'true' ) {
                    google_maps_icon = '/img/lab_marker_home_h4c.png';
                } else {
                    google_maps_icon = '/img/lab_marker_home.png';
                }

            } 

            if (google_maps_page == "lab") {

                if( obj.h4c == 'true' ) {
                    google_maps_icon = '/img/lab_marker_h4c.png';
                } else {
                    google_maps_icon = '/img/lab_marker.png';
                }

            }

            //the marker
            var marker = new google.maps.Marker({
                position: pos,
                myIndex: a,
                map: googlemap,
                icon: google_maps_icon,
                animation: google.maps.Animation.DROP,
                url: obj.url,
                clickable: clickable
            });

            if(google_maps_page == "home"){
                google.maps.event.addListener(marker, 'mouseover', function() {

                    var marker = markerArray[this.myIndex];
                    if(marker){
                        marker.ibox.setOptions({'zIndex':highestZIndex++});
                        $('.markerInfoBox_'+this.myIndex,"#lab-map").css('opacity',1);
                    }
                });
                google.maps.event.addListener(marker, 'mouseout', function() {
                    $('.markerInfoBox_'+this.myIndex,"#lab-map").css('opacity',opac);
                });
            }


            if(obj.url.length>0){
                google.maps.event.addListener(marker, 'click', function() {
                    window.location.href = this.url;
                });
            }

            //the textbox
            var boxText = document.createElement("div");
            boxText.url = obj.url;

            var pixelOffset;
            if(google_maps_page == "lab"){
                //marker on LABS page
                if(obj.url.length>0){
                    boxText.style.cssText = "white-space: nowrap;margin: 0px 8px;cursor:pointer;";
                } else boxText.style.cssText = "white-space: nowrap;margin: 0px 8px;";

                pixelOffset = new google.maps.Size(25, -43);

            } else {
                //marker on HOME page

                if(obj.url.length>0){
                    boxText.style.cssText = "white-space: nowrap;margin: 0px 8px;cursor:pointer;";
                } else boxText.style.cssText = "white-space: nowrap;margin: 0px 8px;";

                pixelOffset = new google.maps.Size(16, -31);

            }

            boxText.innerHTML = obj.text;

            var boxOptions = {
                content: boxText
                ,disableAutoPan: false
                ,maxWidth: 0
                ,pixelOffset: pixelOffset
                ,zIndex: null
                ,closeBoxURL: ""
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,isHidden: false
                ,enableEventPropagation: true
                ,boxClass: "googleMapsInfoBox googleMapsInfoBox_"+google_maps_page+ " markerInfoBox_"+a
                ,position: marker.position
                ,pane: "floatPane"
            };

            var ibox = new InfoBox(boxOptions);
            ibox.myIndex = a;
            google.maps.event.addListener(ibox, 'domready', function() {

                var $marker = $('.markerInfoBox_'+this.myIndex,"#lab-map");
                $marker.data('myIndex', this.myIndex);

                if(google_maps_page == "home"){
                    $marker.css('opacity',0).hover(
                        function() {

                            var myIndex = $(this).data('myIndex');
                            markerArray[myIndex].ibox.setOptions({'zIndex':highestZIndex++});
                            $(this).css('opacity',1);

                        },
                        function() {
                            //out
                            $(this).css('opacity',opac);
                        }
                    );
                }


            });
            ibox.open(googlemap, marker);

            if(obj.url.length>0){
                google.maps.event.addDomListener(boxText, 'click', function() {
                    window.location.href = this.url;
                });
            }

            //store for later use
            marker.obj = obj;
            marker.ibox = ibox;



            //console.log("index -> " + $('.markerInfoBox_'+a,"#lab-map").data('index'));

            markerArray.push(marker);

        }

    }

    window.GoogleMaps = GoogleMaps;

}(window));