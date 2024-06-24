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

const createNewUser = async (data) => {
    try {
        await db.User.create({

        });
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
        await db.User.delete({
            where: { id: id }
        });
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
    createNewUser
}