const User = require('../models/user');
// const bcrypt = require('bcryptjs');
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');
// const Conflict = require('../errors/Conflict');

module.exports.getCurrentUserInfo = (req, res, next) => {
  const { userId } = req.params;
  User.findById(userId)
    .orFail(() => {
      throw new NotFound('Пользователь с таким id не найден');
    })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};

module.exports.updateCurrentUserInfo = (req, res, next) => {
  const { name, email } = req.body;
  // const { _id } = req.user;

  User.findByIdAndUpdate(req.user._id, { name, email }, { new: true, runValidators: true })
    .orFail(() => {
      throw new NotFound('Пользователь с таким id не найден');
    })
    .then((user) => res.send({ user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};
