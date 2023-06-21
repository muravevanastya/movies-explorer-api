require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const auth = require('./middlewares/auth');
const NotFound = require('./errors/NotFound');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const corsValidator = require('./middlewares/corsValidator');
const limiter = require('./middlewares/rateLimiter');

const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;
const { PORT = 3000 } = process.env;

const app = express();

app.use(corsValidator);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_ADDRESS);

app.use(requestLogger);

app.use(limiter);

app.use(helmet());

app.use('/', require('./routes/auth'));

app.use(auth);

app.use('/users', require('./routes/users'));
app.use('/movies', require('./routes/movies'));

app.use('*', (req, res, next) => {
  next(new NotFound('Адреса по вашему запросу не существует'));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });
  next();
});

app.use(errorLogger);

app.use(errors());

app.listen(PORT);
