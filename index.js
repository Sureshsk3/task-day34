import express from "express";
import router from "./src/router/index.router.js";
import cors from "cors"
import "dotenv/config"
const app = express()
const port = process.env.PORT || 8000
app.use(cors())
app.use(express.json())
app.use("/",router)

app.listen(port,()=>console.log(`App is listening port ${port}`))