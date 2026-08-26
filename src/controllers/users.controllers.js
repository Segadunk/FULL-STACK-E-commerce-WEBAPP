import userServices from "../services/users.services.js";

const getUsers = async (req,res)=>{
    const users = await userServices.getUsers;
    res.json(JSON.parse(users));
    
}

const getUserbyId =async (req,res)=>{
    const user= await userServices.getUserbyId(id);
    const id = req.params.userId;

    if(!user){
        return res.send("User not found")
    }

    res.json(JSON.parse(user));
}

export default {getUserbyId, getUsers};