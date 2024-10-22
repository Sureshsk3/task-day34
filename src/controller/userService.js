import userModel from "../model/userModel.js";

const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({},{});
    res.status(200).json({ message: "Users Fetched Successful", data: users });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getOneUser = async (req, res) => {
  try {
    const user = await userModel.findOne({_id:req.headers.id});
    res.status(200).json({ message: "Users Fetched Successful", data: user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  } 
};
const createUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ name: req.body.name,_id:req.body._id });
    if (user) {
      
      res.status(400).json({
        message: "User Already Exisits",
      });
    }
    await userModel.create(req.body);
    res.status(201).json({ message: "User Created Successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  getAllUser,
  getOneUser,
  createUser,
};
