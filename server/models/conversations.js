import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({});

const Conversation = mongoose.model("Conversations", conversationSchema);

export default Conversation;