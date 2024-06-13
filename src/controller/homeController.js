import userService from '../service/userService'

const handleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewUser(email, password, username);
    return res.redirect("/user");
}

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList });
}

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
}

const handleUpdateUserPage = async (req, res) => {
    let user = await userService.getUserById(req.params.id);
    let userData = {};
    if (user && user.length > 0) {
        userData = user[0];
    }
    return res.render("user-update.ejs", { userData });
}

const handleUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let username = req.body.username;
    await userService.updateUserInfor(email, username, id);
    return res.redirect("/user");
}

module.exports = {
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    handleUpdateUserPage,
    handleUpdateUser
}