const app = require('./app');
const connection = require('../db/connection');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log(`Valor da variavel de ambiente do usuario: ${process.env.USERNAME}`)
    console.log(`Valor da variavel de ambiente do sistema operacional: ${process.env.OS}`);
});