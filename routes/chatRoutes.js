const router = require("express").Router();
const {
  createChat,
  findChat,
  userChats,
} = require("../controllers/chatControllers");

router.post("/", createChat);
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat);

export default router;
