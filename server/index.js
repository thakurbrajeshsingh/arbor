import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from 'cors'

// components
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from './routes/routes.js';


const PORT = 8000;

const app = express();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/', Routes);

dotenv.config();
const username = process.env.DB_username;
const password = process.env.DB_password;

Connection(username, password);

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error Arbor Server Could Not Run`);

    }
    console.log(`Arbor Backend Running Successful On Port: ${PORT}`)
})

// deafault data to database
DefaultData();