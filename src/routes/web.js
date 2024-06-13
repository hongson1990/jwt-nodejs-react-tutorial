import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

/**
 * 
 * @param {*} app : express app 
 * @returns 
 */
const initWebRoutes = (app) => {
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUser);
    router.post("/delete-user/:id", homeController.handleDeleteUser);
    router.get("/update-user/:id", homeController.handleUpdateUserPage);
    router.post("/users/update-user", homeController.handleUpdateUser);
    return app.use("/", router);
}

export default initWebRoutes;