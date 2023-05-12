const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getCurrentUserInfo } = require('../contollers/users');
const { updateCurrentUserInfo } = require('../contollers/users');

router.get('/me', getCurrentUserInfo);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
  }),
}), updateCurrentUserInfo);

module.exports = router;
