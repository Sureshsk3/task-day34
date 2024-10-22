import { Router } from "express";
import roomService from "../controller/roomService.js";

const roomrouter = Router();
roomrouter.get("/", roomService.getAllRooms);
roomrouter.get("/:id", roomService.getOneRoom);
roomrouter.post("/", roomService.createRoom);

export default roomrouter;
