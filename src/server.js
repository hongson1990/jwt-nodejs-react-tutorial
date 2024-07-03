import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import configCors from "./config/cors"
import { createJWT, verifyToken } from "./middleware/JWTAction";
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

configCors(app);

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test jwt
createJWT();
verifyToken("");

//init web routes
initWebRoutes(app);
initApiRoutes(app);


app.listen(PORT, () => {
    console.log('>>> JWT Backend is running on the port = ' + PORT);
});