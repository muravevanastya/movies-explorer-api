const router = require('express').Router();
const { login, createUser } = require('../contollers/users');
const { loginUserValidation, registerUserValidation } = require('../utils/validation');

router.post('/signin', loginUserValidation, login);
router.post('/signup', registerUserValidation, createUser);

module.exports = router;
