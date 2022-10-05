const router = require("express").Router();
const adminControllers = require("../controllers/adminControllers");

router.post("/adminregister", adminControllers.adminregister);
router.post("/adminlogin", adminControllers.adminlogin);

module.exports = router;
