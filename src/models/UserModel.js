const {pool} = require('../db/connection');
const userModel = {}

userModel.getAll = async() => {
    const connection = await pool.getConnection();
    try{
        const data = await connection.query('SELECT * FROM users');
        return data[0];
    }catch(ex){
        console.log(ex);
    }finally{
        connection.release();
    }
}

module.exports = userModel;