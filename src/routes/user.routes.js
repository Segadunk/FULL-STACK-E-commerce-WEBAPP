import express from "express"
import usersController from "../controllers/users.controllers.js"; //since we are importing as objects, we need to name the object which can be named directly here while importing

const router=express.Router();

router.get("/users",usersController.getUsers)

router.get("/users/:userId", usersController.getUserbyId);

export default router;
