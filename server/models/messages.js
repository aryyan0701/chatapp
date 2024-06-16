import mongoose from "mongoose";

const messaegSchema = new mongoose.Schema({})

const Message = mongoose.model("Messages", messaegSchema)

export default Message;