// http://codifyacademy.com/wk14/
function myMap() {
	var mapProp = {
		center: new google.maps.LatLng(37.7749, -122.4194),
		zoom: 10,
	};

	var map = new google.maps.Map(document.getElementById("map"), mapProp);

	// creating a marker to the center
	var marker = new google.maps.Marker({position: mapProp.center});
	
	// add marker to the map
	marker.setMap(map);

	// when you click on the marker, zoom in the map
	google.maps.event.addListener(marker, 'click', function() {
		map.setZoom(15);
		map.setCenter(marker.getPosition());
	});

	// disable default controls of the map
	var mapOptions = {
		disableDefaultUI: true
	};
}

// initialize the map when the window is finished loading
google.maps.event.addDomListener(window, 'load', myMap);