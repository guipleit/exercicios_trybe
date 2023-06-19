const expectedJson = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const validateName = (req, res, next) => {
    const { name } = req.body;
    if(!name) return res.status(400).json({ "message": "O campo \"name\" é obrigatório" });
    if(name.length < 4) return res.status(400).json({ "message": "O campo \"name\" deve ter pelo menos 4 caracteres" });
    next();
}

const validatePrice = (req, res, next) => {
    const { price } = req.body;
    if(!price) return res.status(400).json({ "message": "O campo \"price\" é obrigatório" });
    if(price < 0) return res.status(400).json({ "message": "O campo \"price\" deve ser maior ou igual a zero" });
    next();
};

const validateDescription = (req, res, next) => {
    const { description } = req.body;
    const { createdAt, rating, difficulty } = req.body.description;
    if(!description) return res.status(400).json({ "message": "O campo \"description\" é obrigatório" });
    if(!createdAt) return res.status(400).json({ "message": "O campo \"createdAt\" é obrigatório" });
    if(!rating) return res.status(400).json({ "message": "O campo \"rating\" é obrigatório" });
    if(!difficulty) return res.status(400).json({ "message": "O campo \"difficulty\" é obrigatório" });
    next();
};

const validateCreatedAt = (req, res, next) => {
    const { createdAt } = req.body.description;
    const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if(!dateRegex.test(createdAt)) return res.status(400).json({ "message": "O campo \"createdAt\" deve ter o formato \"dd/mm/aaaa\"" });
    next();
};

const validateRating = (req, res, next) => {
    const { rating } = req.body.description;
    if(rating < 1 || rating > 5) return res.status(400).json({ "message": "O campo \"rating\" deve ser um inteiro de 1 à 5" });
    next();
};

const validateDifficulty = (req, res, next) => {
    const { difficulty } = req.body.description;
    const availableDifficulties = ['Fácil', 'Médio', 'Difícil'];
    if(!availableDifficulties.includes(difficulty)) return res.status(400).json({ "message": "O campo \"difficulty\" deve ser um dos seguintes valores: Fácil, Médio ou Difícil" });
};



module.exports = {
    validateName,
    validatePrice,
    validateDescription,
    validateCreatedAt,
    validateRating,
    validateDifficulty,
}