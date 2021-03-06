require("dotenv").config();

var axios = require("axios");
var commandInput = process.argv.slice(3).join(" ");
var command = process.argv[2];
// console.log(command)
var moment = require("moment");

// Concert Stuff
function concertThis(artist) {
  console.log(artist);
  var concertURL =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";
  axios
    .get(concertURL)
    .then(function(data) {
      var concertData = data.data;
      for (var i = 0; i < concertData.length; i++) {
        // console.log(concertData)
        var venueName = concertData[i].venue.name;
        var venueLocation =
          concertData[i].venue.city + ", " + concertData[i].venue.country;
        var eventDate = concertData[i].datetime;
        eventDate = moment(eventDate).format("MM/DD/YYYY");
        console.log(venueName);
        console.log(venueLocation);
        console.log(eventDate);
        console.log("<--------------------->");
      }
    })
    .catch(error => console.log(error));
}

// <------------------------->

// Spotify Stuff
var Spotify = require("node-spotify-api");

var spotify = new Spotify({
  id: process.env.spotify_client_ID,
  secret: process.env.spotify_client_secret_ID
});

function spotifyThisSong(song) {
  spotify.search({ type: "track", query: song, limit: 1 }, function(err, data) {
    var songObj = data.tracks.items[0];
    var songName = songObj.name;
    var songArtist = songObj.artists[0].name;
    var songAlbum = songObj.album.name;
    var songPreviewUrl = songObj.preview_url;
    console.log("Song Name: " + songName);
    console.log("Song Artist: " + songArtist);
    console.log("Song Album: " + songAlbum);
    console.log("Song Preview: " + songPreviewUrl);
    if (songName === undefined) {
      console.log(
        "Sorry, no song by that name is available.  Pick a different song."
      );
    }
    if (err) {
      console.log(err);
      return;
    }
  });
}

// <------------------------->

// OMDB Stuff
function movieThis(movie) {
  if (!movie) {
    movie = "Mr. Nobody";
  }
  console.log(movie);
  var queryURL = "http://www.omdbapi.com/?&t=" + movie + "&apikey=trilogy";
  axios.get(queryURL).then(function(data) {
    var movieData = data.data;
    var movieTitle = movieData.Title;
    var movieYear = movieData.Year;
    var movieIMDBRatings = movieData.Ratings[0].Value;
    var movieTomatoRating = movieData.Ratings[1].Value;
    var movieLanguage = movieData.Language;
    var movieCountry = movieData.Country;
    var moviePlot = movieData.Plot;
    var movieActor = movieData.Actors;
    console.log("Movie Title: " + movieTitle);
    console.log("Release Year: " + movieYear);
    console.log("IMDB Rating: " + movieIMDBRatings);
    console.log("Rotten Tomatoes Rating: " + movieTomatoRating);
    console.log("Language: " + movieLanguage);
    console.log("Country: " + movieCountry);
    console.log("Plot: " + moviePlot);
    console.log("Actors: " + movieActor);
  });
}

// <------------------------->

// Do What It Says Stuff
var fs = require("fs");

fs.appendFile('log.txt', command + ' ' + commandInput + ', ', 'utf8', function (err) {
    if (err) throw err;
    console.log('Logged!');
  });

function doThis() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) throw err;
    var randomTextArr = data.split(",");
    command = randomTextArr[0];
    commandInput = randomTextArr[1];
    switchFunction(command, commandInput);
  });
}

function switchFunction(command, commandInput) {
  switch (command) {
    case "spotify-this-song":
      spotifyThisSong(commandInput);
      return true;
    case "concert-this":
      concertThis(commandInput);
      return true;
    case "movie-this":
      movieThis(commandInput);
      return true;
  }
  return false;
}

function switchFunctionAll(command, commandInput) {
  if (!switchFunction(command, commandInput) && command === "do-what-it-says") {
    doThis();
  }
}

switchFunctionAll(command, commandInput);
