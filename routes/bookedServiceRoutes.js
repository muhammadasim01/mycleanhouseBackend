const router = require("express").Router();
const bookServiceControllers = require("../controllers/bookedServiceControllers");

router.post(
  "/bookedService/:buyerId",
  bookServiceControllers.bookedServiceController
);

module.exports = router;
