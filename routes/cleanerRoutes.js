const router = require("express").Router();
const cleanerControllers = require("../controllers/cleanerControllers");
const upload = require("../helpers/helper");

router.post(
  "/addCleaner",
  upload.single("Photo"),
  cleanerControllers.addCleaner
);
router.post("/loginCleaner", cleanerControllers.loginCleaner);
router.delete("/deleteCleaner", cleanerControllers.deleteCleaner);
router.get("/getAllCleaners", cleanerControllers.getAllCleaners);
router.get(
  "/getSingleCleanerById/:id",
  cleanerControllers.getSingleCleanerById
);
router.patch("/updateCleaner", cleanerControllers.updateCleaner);
router.post(
  "/givingReviewAndRatingToCleaner",
  cleanerControllers.givingReviewAndRatingToCleaner
);
router.post("/loginWithGoogle", cleanerControllers.loginWithGoogle);
router.post("/loginWithFacebook", cleanerControllers.loginWithFacebook);
router.post("/loginWithTwitter", cleanerControllers.loginWithTwitter);

module.exports = router;
