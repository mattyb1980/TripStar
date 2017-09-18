

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
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }