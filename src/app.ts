
import dotenv from "dotenv"
dotenv.config();
import express from "express";

import syncronizeModels from "./databaseConfig/connection";
import sequelize from "./databaseConfig/config";
import API from "./routes/RootRoute/rootRoute";


const app = express();





app.use(express.urlencoded());
app.use(express.json());


app.use('/api/v1',API);



sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    syncronizeModels();
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});



export default app;

















