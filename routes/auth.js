const router = require('express').Router();
const { login, createUser } = require('../contollers/users');
const { loginUserValidation, registerUserValidation } = require('../middlewares/validation');

router.post('/signin', loginUserValidation, login);
router.post('/signup', registerUserValidation, createUser);

module.exports = router;
