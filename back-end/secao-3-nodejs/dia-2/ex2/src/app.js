const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const app = express();

app.use(express.json());

const readMovies = async () => {
    const movies = await fs.readFile(path.join(__dirname, 'movies.json'), 'utf8');
    return JSON.parse(movies);
};

const addNewMovie = async (newMovie) => {
    const movies = await readMovies();
    newMovie.id = movies.length + 1;
    movies.push(newMovie);
    await fs.writeFile(path.join(__dirname, 'movies.json'), JSON.stringify(movies, null, 2));
    return newMovie;
};

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await readMovies();
    const movie = movies.find(movie => movie.id === Number(id));
    if (!movie) return res.status(404).send('Movie not found');
    return res.status(200).json(movie);
});

app.get('/movies', async (req, res) => {
    const movies = await readMovies();
    return res.status(200).json(movies);
});

app.post('/movies', async (req, res) => {
    const movies = await readMovies();
    const newMovie = req.body;
    newMovie.id = movies.length + 1;
    movies.push(newMovie);
    await addNewMovie(newMovie);
    return res.status(201).json(newMovie);
});

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await readMovies();
    const movie = movies.find(movie => movie.id === Number(id));
    if (!movie) return res.status(404).send('Movie not found');
    const updatedMovie = req.body;
    updatedMovie.id = movie.id;
    const index = movies.indexOf(movie);
    movies[index] = updatedMovie;
    await fs.writeFile(path.join(__dirname, 'movies.json'), JSON.stringify(movies, null, 2));
    return res.status(200).json(updatedMovie);
});

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await readMovies();
    const movie = movies.find(movie => movie.id === Number(id));
    if (!movie) return res.status(404).send('Movie not found');
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    await fs.writeFile(path.join(__dirname, 'movies.json'), JSON.stringify(movies, null, 2));
    return res.status(200).json(movie);
});


module.exports = app;