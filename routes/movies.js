const router = require('express').Router();
const { createMovieValidation, deleteMovieValidation } = require('../middlewares/validation');
const { getMovies } = require('../contollers/movies');
const { createMovie } = require('../contollers/movies');
const { deleteMovie } = require('../contollers/movies');

router.get('/', getMovies);
router.post('/', createMovieValidation, createMovie);
router.delete('/:id', deleteMovieValidation, deleteMovie);

module.exports = router;
