
alert('Javascript is working')

<script src="http://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>;
function myMap() {
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: new google.maps.LatLng(51.5, -0.2),
		zoom 10
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
}
