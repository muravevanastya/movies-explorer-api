const router = require('express').Router();
const getMovies = require('../contollers/movies');
const createMovie = require('../contollers/movies');
const deleteMovie = require('../contollers/movies');

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/_id', deleteMovie);
