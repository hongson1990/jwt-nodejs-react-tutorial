import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

/**
 * 
 * @param {*} app : express app 
 * @returns 
 */
const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWork)

    return app.use("/", router);
}

export default initWebRoutes;