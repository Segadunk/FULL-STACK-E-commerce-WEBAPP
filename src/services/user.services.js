import fs from "fs/promises";
import userModels from "../models/users.model.js";

const getUsers= async()=>{
const users= await fs.readFile("data/users.json","utf-8"); //even tho we are inside src and the users are in separate directory one step above, we use this because we run command from the parent file where the package.json is
    return users
};

const getUsersbyId= async(id)=>{
    const users = await fs.readFile("data/users.json","utf-8"
    )

    const user = JSON.parse(users).find((user)=>user.id==id);

    return user;
}

const createUser= async () => {
     return await userModels.create({
        name:"Hari",
        age:30,
    } //the return is buggy but idk how
)}
export default {getUsersbyId, getUsers,createUser}