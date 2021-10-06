const express = require("express");
const userController=require("./controllers/user.controller");
const createUser = require('./controllers/user.controller')

const app = express();
app.use(express.json())
app.use("/users",userController)
app.use('/users', createUser)

module.exports=app;
