const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: process.env.WAIT_FOR_CONNECTIONS,
    connectionLimit: process.env.CONNECTION_LIMIT,
    queueLimit: process.env.QUEUE_LIMIT,
});

module.exports = connection;