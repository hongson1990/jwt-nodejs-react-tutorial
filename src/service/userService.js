import bcrypt from 'bcryptjs';
import bluebird from 'bluebird';
import mysql from 'mysql2/promise';

const salt = bcrypt.genSaltSync(10);

// Create the connection to database


const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    let hashPass = hashUserPassword(password);
    try {
        await connection.execute(' INSERT INTO Users (email, password, username) VALUES (?, ?, ?)', [email, hashPass, username]);
    } catch (error) {
        console.log(">>> check error: ", error);
    }
}

const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    try {
        const [rows, fields] = await connection.execute('Select * from Users');
        return rows;
    } catch (error) {
        console.log(">>> check error: ", error);
    }
}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    try {
        await connection.execute('DELETE FROM Users WHERE id=?', [id]);
    } catch (error) {
        console.log(">>> check error: ", error);
    }
}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser
}