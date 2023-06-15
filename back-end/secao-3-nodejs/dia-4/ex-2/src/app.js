const express = require('express');
const app = express();
const {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty
} = require('../middlewares/validateJson');

const { validateSignup } = require('../middlewares/validateSignup');

app.use(express.json());

const allMiddlewares = [
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty
];

app.use('/activities', allMiddlewares);

app.post('/activities',  (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

app.post('/signup', validateSignup, (_req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;
