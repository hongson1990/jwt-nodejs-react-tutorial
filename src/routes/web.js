import express from "express";

const router = express.Router();

/**
 * 
 * @param {*} app : express app 
 * @returns 
 */
const initWebRoutes = (app) => {
    router.get("/", async (req, res) => {
        return res.send("Hello world");
    })

    return app.use("/", router);
}

export default initWebRoutes;