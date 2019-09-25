require("dotenv").config();
const express = require("express");
const massive = require("massive");
//SESSIONS
const session = require("express-session");

//CONTROLLERS


const app = express();

app.use(express.json());




app.listen(5050, () => console.log(`Listening on Port 5050`));