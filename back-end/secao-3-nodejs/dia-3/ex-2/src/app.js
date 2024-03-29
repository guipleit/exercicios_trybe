const express = require('express');
const app = express();

const cacauTrybe = require('./cacauTrybe');

app.get('/chocolates', async (req, res) => {
    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json(chocolates);
});

app.get('/chocolates/:id', async (req, res) => {
    const { id } = req.params;
    const chocolate = await cacauTrybe.getChocolateById(id);
    if (!chocolate) return res.status(404).json({ message: 'Chocolate não encontrado' });
    res.status(200).json(chocolate);
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
    const { brandId } = req.params;
    const chocolates = await cacauTrybe.getChocolatesByBrandId(brandId);
    if (!chocolates) return res.status(404).json({ message: 'Chocolates não encontrados' });
    res.status(200).json(chocolates);
});

module.exports = app;