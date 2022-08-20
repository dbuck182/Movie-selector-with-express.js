const express = require('express');
const app = express();
const { movies } = require('./data');
const {RandomElement} = require('./functions');
const bodyParser = require('body-parser');

// using body-parser as middleware
app.use(bodyParser.json(strict = true));
// Static Files
app.use(express.static(__dirname + '/public'));

app.get('/movies', (req, res) => {
    res.send(movies);
});

app.get('/movie_to_watch.html', (req, res) => {
    res.sendFile(__dirname + "/" + "movie_to_watch.html")
});
// get route that returns a random movie of the genre chosen
app.get('/Movie', (req, res) => {
    const pickedGenre = req.query.genre
    let movies_to_watch = []
    for (let movie of movies) {
        if (movie.genre === pickedGenre){
            movies_to_watch.push(movie);
            console.log(movie.genre)
        }

    };
    //console.log(movies_to_watch);
    const response = RandomElement(movies_to_watch);
    //console.log(response);
    res.send(JSON.stringify(response));
    console.log(response);
});
// route for Random button that responds a random movie
app.get('/Random', (req, res) => {
    const randomMovie = RandomElement(movies);
    res.send(JSON.stringify(randomMovie));
});
// route for updating the movie sheet not working yet
//app.post('/update', (req, res) => {
    //console.log(req.body);
    //const movieBody = {rank: movies.length + 1, movie: req.body.movie,
    //director: req.body.director, genre: req.body.genre}
    //movies.push(movieBody);
    //res.send(JSON.stringify(movieBody))

//});
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
console.log(`App is listening on port ${PORT}`)
});