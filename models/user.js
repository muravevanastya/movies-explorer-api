const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (email) => { validator.isEmail(email); },
      message: 'Неправильный формат почты',
    },
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);
