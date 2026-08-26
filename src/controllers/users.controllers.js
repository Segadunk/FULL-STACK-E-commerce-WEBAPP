import fs from "fs/promises";



const getUsers = async (req,res)=>{
    const users= await fs.readFile("data/users.json","utf-8")

    res.json(JSON.parse(users));
    
}

const getUserbyId =async (req,res)=>{
    const id = req.params.userId;
    const users= await fs.readFile("data/users.json","utf-8"); //even tho we are inside src and the users are in separate directory one step above, we use this because we run command from the parent file where the package.json is

    const user= JSON.parse(users).find((user)=> user.id==id);

    if(!user){
        return res.send("User not found")
    }

    res.json(JSON.parse(user));
}

export default {getUserbyId, getUsers};