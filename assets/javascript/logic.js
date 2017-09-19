

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDF9Vvwg15OjwYLYFbGCZwWHJuG4KqA_Y8",
    authDomain: "tripstar-94b87.firebaseapp.com",
    databaseURL: "https://tripstar-94b87.firebaseio.com",
    projectId: "tripstar-94b87",
    storageBucket: "",
    messagingSenderId: "8807954263"
  };
  
  firebase.initializeApp(config);

  // GoogleMaps apiKey
  // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyB9Nvofo-afipjBXoaO4g_hoyDMsIZqUiE
	function initMap() {
	        var uluru = {lat: -25.363, lng: 131.044};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 15,
	          center: uluru
	        });
	        var marker = new google.maps.Marker({
	          position: uluru,
	          map: map
	    });
	}