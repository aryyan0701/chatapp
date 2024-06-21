import express from "express";
const router = express.Router();
import {sendMessage, getMessages} from "../controllers/messageController.js"
import protectRoute from "../middleware/protecteRoute.js"

router.get("/:id", protectRoute, getMessages)
router.post('/send/:id', protectRoute, sendMessage)

export default router;