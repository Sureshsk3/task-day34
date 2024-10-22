import bookingModel from "../model/bookingModel.js";
import userModel from "../model/userModel.js";
import roomModel from "../model/roomModel.js";

const getAllBooking = async (req, res) => {
  try {
    const agg = await bookingModel.aggregate([
      {
        $lookup: {
          from: `${roomModel}`,
          localField: `${bookingModel.roomName}`,
          foreignField: `${bookingModel._id}`,
          as: `${bookingModel()}`,
        },
      },
      {
        $match: { roomName: req.body.roomName },
      },
    ]);
    res.status(200).json({ data: agg, message: "Data Fetched Successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const createBooking = async (req, res) => {
  try {
    const booking = await bookingModel.findOne({
      roomName: req.body.roomName,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });
    if (!booking) {
      await bookingModel.create(req.body);
      res.status(201).json({ message: "Booking Created Successful" });
    }
    res.status(400).json({
      message: `${booking.roomName} is Not Available on the date of ${booking.date} from ${booking.startTime} to ${booking.endTime}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default {
  getAllBooking,
  createBooking,
};
