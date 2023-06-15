const validateId = (req, res, next) => {
    const id = Number(req.params.id);
    if (Number.isInteger(id) && id > 0) {  
        next();
    } else {
        res.status(400).json({ error: 'Invalid id' });
    }
};

module.exports = validateId;