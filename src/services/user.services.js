import fs from "fs/promises";

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

export default {getUsersbyId, getUsers};