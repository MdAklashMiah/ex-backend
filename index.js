const express = require("express");
require('dotenv').config()
const dbConnection = require("./src/config/dbconfig");
const router = require("./src/router");

const app = express();
port = 4000;

dbConnection();

app.use(router)

app.use((req,res)=>{
    return res.status(404).json({message: "Route Not Found"})
})

app.listen(port, () => {
  console.log(`Server is running , port number: ${port}`);
});
