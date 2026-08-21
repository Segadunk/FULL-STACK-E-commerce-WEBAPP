import express from "express";
import fs from "fs/promises";
import dotenv from "dotenv"

const app=express(); //server init

dotenv.config() //in env files never space 

app.get("/", (req,res)=>{
    res.send("<h1>Home page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1> </br>Here are all the info about contacting the devs of the page")
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server running at port 5000`)
});// listen is required so that when we go to a particular site, localhost:5000 in this case, we listen where the user wanna go 

app.get("/users/:userId", async (req,res)=>{
    const id = req.params.userId;
    const users= await fs.readFile("data/users.json","utf-8"); //even tho we are inside src and the users are in separate directory one step above, we use this because we run command from the parent file where the package.json is
    const user= JSON.parse(users).find((user)=> users.id==id);

    if(!user){
        return res.send("User not found")
    }

    res.json(JSON.parse(user));
});

//suppose we want products page
app.get("/products", async(req, res)=>{
    const products = await fs.readFile("data/products.json","utf-8");

    res.json(JSON.parse(products));
})