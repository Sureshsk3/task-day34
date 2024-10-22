import { Router } from "express";
import userService from "../controller/userService.js";

const userrouter = Router();
userrouter.get("/", userService.getAllUser);
userrouter.get("/:id", userService.getOneUser);
userrouter.post("/", userService.createUser);

export default userrouter;
