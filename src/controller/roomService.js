import roomModel from "../model/roomModel.js";
const getAllRooms = async (req, res) => {
  try {
    const rooms = await roomModel.find({}, {});
    res.status(200).json({ data: rooms, message: "Users Fetched Successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getOneRoom = async (req, res) => {
  try {
    const room = await roomModel.findOne({_id:req.headers.id});
    res.status(200).json({ data: room, message: "User Fetched Successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const createRoom = async (req, res) => {
  try {
    const room = await roomModel.findOne({
      roomName: req.body.roomName,
    });
    if (!room) {
      await roomModel.create(req.body);
      res.status(201).json({ message: "Room Created Successful" });
    } else {
      res.status(400).json({ message: "Room Already Exisits" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  getAllRooms,
  getOneRoom,
  createRoom,
};
