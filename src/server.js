import express from "express";
import fs from "fs/promises";

import config from "./config/config.js";

import usersRoute from "./routes/user.routes.js"

const app=express(); //server init

app.get("/", (req,res)=>{
    res.send("<h1>Home page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1> </br>Here are all the info about contacting the devs of the page")
})

//suppose we want products page
app.get("/products", async(req, res)=>{
    const products = await fs.readFile("data/products.json","utf-8");  

    res.json(JSON.parse(products));
})

app.use("/", usersRoute)

app.listen(config.port, ()=>{
    console.log(`Server running at port 5000`)
});// listen is required so that when we go to a particular site, localhost:5000 in this case, we listen where the user wanna go 
