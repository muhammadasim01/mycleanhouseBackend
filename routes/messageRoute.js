const express = require("express");
import { addMessage, getMessages } from "../controllers/messageControllers";

const router = express.Router();

router.post("/", addMessage);

router.get("/:chatId", getMessages);

export default router;
