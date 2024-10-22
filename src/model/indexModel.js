import mongoose from "mongoose";
import "dotenv/config";
mongoose
  .connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}`)
  .then(() => console.log("MongoDB Connected Successfull"))
  .catch((err) => console.log(err));

export default mongoose;
