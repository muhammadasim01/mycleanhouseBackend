const Cleaner = require("../models/Cleaner");
const bcrypt = require("bcryptjs");

const addCleaner = async (req, res) => {
  const {
    username,
    password,
    city,
    name,
    pricePerHour,
    currency,
    rating,
    reviews,
    experienceInYear,
    memberSince,
    isOnline,
    languages,
    services,
    isCertified,
    policeClearanceCheck,
    petFriendly,
    singleMaleClient,
    bio,
  } = req.body;
  const Photo = req.file.filename;
  if (Photo === "" || Photo === null || Photo === undefined) {
    return res.send({ success: false, error: "picture is required" });
  }

  try {
    const isExist = await Cleaner.findOne({ username });
    if (isExist) {
      return res.send({ success: false, error: "user already exists" });
    }
    const newCleaner = await new Cleaner({
      username,
      password,
      city,
      Photo,
      name,
      pricePerHour,
      currency,
      rating,
      reviews,
      experienceInYear,
      memberSince,
      isOnline,
      languages,
      services,
      isCertified,
      policeClearanceCheck,
      petFriendly,
      singleMaleClient,
      bio,
    }).save();
    res.send(newCleaner);
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const loginCleaner = async (req, res) => {
  const { username, password } = req.body;
  try {
    const isExist = await Cleaner.findOne({ username });
    if (isExist) {
      const isMatch = await bcrypt.compare(password, isExist.password);
      if (isMatch) {
        const token = await isExist.generateToken();
        if (token)
          return res.send({ success: true, message: "user sigedin", token });
      } else {
        return res.send({ success: false, error: "invalid credentials" });
      }
    } else {
      return res.send({ success: false, error: "invalid credentials" });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const deleteCleaner = async (req, res) => {
  const { id } = req.body;
  try {
    const removeCleaner = await Cleaner.findByIdAndDelete(id);
    if (removeCleaner) {
      return res.send({
        success: true,
        message: "Cleaner is deleted successfully",
      });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const getAllCleaners = async (req, res) => {
  try {
    const allCleaners = await Cleaner.find({});
    if (allCleaners) {
      return res.send({ success: true, data: allCleaners });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const getSingleCleanerById = async (req, res) => {
  const { id } = req.params;
  try {
    const cleaner = await Cleaner.findById(id);
    if (cleaner) {
      return res.send({ success: true, data: cleaner });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const updateCleaner = async (req, res) => {
  try {
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const givingReviewAndRatingToCleaner = async (req, res) => {};
const loginWithGoogle = async (req, res) => {};
const loginWithFacebook = async (req, res) => {};
const loginWithTwitter = async (req, res) => {};

module.exports = {
  addCleaner,
  loginWithTwitter,
  loginWithFacebook,
  loginWithGoogle,
  givingReviewAndRatingToCleaner,
  loginCleaner,
  deleteCleaner,
  getAllCleaners,
  getSingleCleanerById,
  updateCleaner,
};
