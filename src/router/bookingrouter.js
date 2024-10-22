import { Router } from "express";
import bookingService from "../controller/bookingService.js";

const bookingrouter = Router();
bookingrouter.get("/", bookingService.getAllBooking);
bookingrouter.post("/", bookingService.createBooking);

export default bookingrouter;
