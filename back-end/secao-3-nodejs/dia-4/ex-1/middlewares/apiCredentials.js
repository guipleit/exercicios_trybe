const fs = require('fs').promises;
const path = require('path');

const validateApiToken = async (req, res, next) => {
    const token = req.header('X-API-TOKEN');
    const apiToken = await fs.readFile(path.join(__dirname, '../authData.json'), { encoding: 'utf-8' })
    const jsonApiToken = JSON.parse(apiToken);
    if(token in jsonApiToken){
        next();
    } else {
        res.status(401).json({ message: 'Token inválido!' });
    }
};

module.exports = () => validateApiToken;
