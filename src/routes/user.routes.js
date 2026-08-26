import express from "express"
import usersController from "../controllers/users.controllers";

const router=express.Router();

router.get("/users",usersController.getUsers())

router.get("/users/:userId", usersController.getUserbyId);

export default router;
