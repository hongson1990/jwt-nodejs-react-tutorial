import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import configCors from "./config/cors";
import cookieParser from 'cookie-parser';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

configCors(app);

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser())


//init web routes
initWebRoutes(app);
initApiRoutes(app);


app.use((req, res, next) => {
    console.log(">>> check new request");
    console.log("host: ", req.hostname);
    console.log("host: ", req.path);
    console.log("host: ", req.method);
    next();
});


app.use((req, res) => {
    return res.send('404 not found');
});

app.listen(PORT, () => {
    console.log('>>> JWT Backend is running on the port = ' + PORT);
});