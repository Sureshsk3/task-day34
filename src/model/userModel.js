import mongoose from "./indexModel.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "UserName Required"],
    },
  },
  {
    versionKey: false,
  }
);

export default new mongoose.model("users", userSchema);
