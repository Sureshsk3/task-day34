import mongoose from "./indexModel.js";

const roomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      required: [true, "RoomName Required"],
    },
    amenties: {
      type: Array,
      required: [true, "Amenties Are Required"],
      default: [],
    },
    seats: {
      type: String,
    },
    price: {
      type: String,
      required: [true, "Price Required"],
    },
  },
  {
    versionKey: false,
  }
);

export default new mongoose.model("rooms", roomSchema);
