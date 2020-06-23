const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'edin_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

module.exports = {pool}
