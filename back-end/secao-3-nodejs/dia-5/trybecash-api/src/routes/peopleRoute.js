const express = require('express');
const peopleDB = require('../../db/peopleDB.js');

const router = express.Router();

router.post('/', async (req, res) => {
    const person = req.body;
    try {
        const [result] = await peopleDB.insert(person);
        res.status(201).json({ message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
    }
});

router.get('/', async (_req, res) => {
    try {
        const result = await peopleDB.getAll();
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ocorreu um erro ao listar as pessoas' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
       const [[result]] = await peopleDB.findById(id);
       if (!result) {
           return res.status(404).json({ message: 'Pessoa não encontrada' });
         }
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: 'Pessoa não encontrada' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const person = req.body;
    try {
        const [result] = await peopleDB.update(id, person);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Pessoa não encontrada' });
        }
        res.status(200).json({ message: `pessoa de id ${id} atualizada com sucesso` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ocorreu um erro ao atualizar uma pessoa' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await peopleDB.deleteById(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Pessoa não encontrada' });
        }
        res.status(200).json({ message: `pessoa de id ${id} excluída com sucesso` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ocorreu um erro ao excluir uma pessoa' });
    }
});







module.exports = router;