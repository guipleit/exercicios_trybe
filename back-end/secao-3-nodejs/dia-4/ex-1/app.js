const express = require('express');
const validateId = require('./middlewares/validateId');
const validateProperties = require('./middlewares/validateProperties');
const validateApiToken = require('./middlewares/apiCredentials');

const app = express();
app.use(validateApiToken);
app.use(express.json());

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];


app.get('/teams/:id', validateId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    if (team) {
        res.json(team);
    } else {
        res.sendStatus(404);
    }
});


app.get('/teams', (req, res) => res.json(teams));

app.post('/teams', validateProperties, (req, res) => {
    const team = { id: nextId += 1, ...req.body };
    teams.push(team);
    res.status(201).json(team);
});

app.put('/teams/:id', validateId, validateProperties, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    if (team) {
        Object.assign(team, req.body);
        res.json(team);
    } else {
        res.sendStatus(404);
    }
});

app.delete('/teams/:id', validateId,(req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

module.exports = app;