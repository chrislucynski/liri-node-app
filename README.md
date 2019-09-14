# liri-node-app
LIRI will be a command line node app that takes in parameters and gives you back data.

### Clearly state the problem the app is trying to solve (i.e. what is it doing and why)

This node-based app is intended to allow the user to input commands, and return entertainment data of their choosing.  The 4 different commands the user can run are:

1) 'spotify-this-song' - this command along with a song title will retrieve and display data (artist(s), song's name, preview link of the song, and the album the song is from) from Spotify.

2) 'concert-this' - this command along with an artist's name will retrieve and display data (venue name, venue location, date of event) from Bands in Town Artist Events API.

3) 'movie-this' - this command along with an artist's name will retrieve and display data (movie title, release year, IMDB movie rating, Rotten Tomatoes movie rating, country where the movie was produced, language of the movie, movie plot, actors/actresses) from OMDB.

4) 'do-what-it-says' - this command will read the contents in the 'random.txt' file, which should contain one of the aforementioned commands and the desired song, artist, or movie. 

### Give a high-level overview of how the app is organized

The app contains functions to access information from different API's in order to display the requested data. 

### Give start-to-finish instructions on how to run the app

To begin using the app, use one of the aforementioned commands and the input required for each command:

If you are using the 'spotify-this-song' command, type in the name of the song.

if you are using the 'concert-this' command, type in the name of the artist.

if you are using the 'movie-this' command, type in the name of the movie.

using the 'do-what-it-says' command, you will not need to type in additional input.

### Include screenshots, gifs or videos of the app functioning

<!-- <----------------------------------> -->

### Contain a link to a deployed version of the app

https://github.com/chrislucynski/liri-node-app

### Clearly list the technologies used in the app

This app utilizes JS, .txt files, node-modules, and installed npm packages.

### State your role in the app development

I contributed and maintin this app.
