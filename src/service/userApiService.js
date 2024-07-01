import db from '../models/index';


const getAllUser = async () => {
    let data = {
        EM: '',
        EC: '',
        DT: '',
    }
    try {
        let users = await db.User.findAll({
            attributes: ["id", "username", "email", "phone", "sex"],
            include: { model: db.Group, attributes: ["name", "description"] },
        });
        if (users) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: users,
            }
        } else {
            return {
                EM: 'get data success',
                EC: 0,
                DT: [],
            }
        }
    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrong with servies',
            EC: 1,
            DT: [],
        }
    }
}

const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ["id", "username", "email", "phone", "sex"],
            include: { model: db.Group, attributes: ["name", "description"] },
        });
        let totalPage = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPage: totalPage,
            users: rows
        }

        return {
            EM: 'fetch Ok',
            EC: 0,
            DT: data,
        }
    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrong with servies',
            EC: 1,
            DT: [],
        }

    }
}

const createNewUser = async (data) => {
    try {
        await db.User.create(data);
        return {
            EM: 'create Ok',
            EC: 0,
            DT: [],
        }
    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrong with servies',
            EC: 1,
            DT: [],
        }
    }
}

const updateUser = async (data) => {
    try {
        let user = await db.User.findOne({
            where: { id: data.id }
        });

        if (user) {
            user.save({

            });
        } else {

        }
    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrong with servies',
            EC: 1,
            DT: [],
        }
    }
}

const deleteUser = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id }
        });

        if (user) {
            await user.destroy();
            return {
                EM: 'Delete user successed',
                EC: 0,
                DT: [],
            }
        } else {
            return {
                EM: 'User not exist',
                EC: 2,
                DT: [],
            }
        }
    } catch (e) {
        console.log(e);
        return {
            EM: 'something wrong with servies',
            EC: 1,
            DT: [],
        }
    }
}


module.exports = {
    getAllUser,
    updateUser,
    deleteUser,
    createNewUser,
    getUserWithPagination
}