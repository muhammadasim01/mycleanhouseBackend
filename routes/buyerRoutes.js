const router = require("express").Router();
const buyerControllers = require("../controllers/buyerControllers");
const upload = require("../helpers/helper");

router.post("/addBuyer", upload.single("Photo"), buyerControllers.addBuyer);
router.post("/loginBuyer", buyerControllers.loginBuyer);
router.delete("/deleteBuyer/:id", buyerControllers.deleteBuyer);
router.get("/getAllBuyers", buyerControllers.getAllBuyers);
router.get("/getSingleBuyerWithId/:id", buyerControllers.getSingleBuyerWithId);
router.patch("/updateBuyer/:id", buyerControllers.updateBuyer);
router.post("/bookCleaner/:id", buyerControllers.bookCleaner);
router.post("/addToFavourite/:id", buyerControllers.addToFavourite);
router.post("/loginWithGoogle", buyerControllers.loginWithGoogle);
router.post("/loginWithFacebook", buyerControllers.loginWithFacebook);
router.post("/loginWithTwitter", buyerControllers.loginWithTwitter);

module.exports = router;
