const {Client} = require('pg')
const express = require('express');
//const client= require('./db');
const app = express();
const path = require('path');
const dotenv = require('dotenv')
 dotenv.config({ path: './config/config.env' });
 const PORT = process.env.PORT;
 
app.use(express.json());
app.listen(PORT || 3000, ()=>{
    console.log("Sever is now listening at port 3000");
})
console.log("helo")

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "coolguy4you",
    database: "Peoplex"
})
client.connect()
.then(()=>console.log("Db is connected"))

// client.connect();
app.get('/users', (req, res)=>{
    client.query(`Select * from "User"`, (err, result)=>{
        if(!err){
            console.log(result);
            res.send(result.rows);
        }
    });
    client.end;
});