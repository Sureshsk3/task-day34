import mongoose from "./indexModel.js";

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true],
    },
    roomName: {
      type: String,
    },
    roomId: {
      type: String,
    },
    date: {
      type: String,
      required: [true],
    },
    startTime: {
      type: String,
      required: [true],
    },
    endTime: {
      type: String,
      required: [true],
    },
    status: {
      type: String,
      enum: ["Pending", "Successful", "Rejected"],
      default: "Pending",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

export default new mongoose.model("bookings", bookingSchema);
