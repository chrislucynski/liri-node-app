require("dotenv").config();
console.log(process.env.spotify_client_ID);
console.log(process.env.spotify_client_secret_ID);

// Spotify Stuff

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.spotify_client_ID,
    secret: process.env.spotify_client_secret_ID
  });
   
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
