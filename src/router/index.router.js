import { Router } from "express";
import bookingrouter from "./bookingrouter.js";
import roomrouter from "./roomrouter.js";
import userrouter from "./userrouter.js";
const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Welcome to Express Server",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
router.use("/room", roomrouter);
router.use("/booking", bookingrouter);
router.use("/user", userrouter);

export default router;
