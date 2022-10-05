const Buyer = require("../models/Buyer");
const bcrypt = require("bcryptjs");

const addBuyer = async (req, res) => {
  const { username, password, city, name, favouriteSellers, memberSince } =
    req.body;
  const Photo = req.file.filename;
  if (Photo === "" || Photo === null || Photo === undefined) {
    return res.send({ success: false, error: "picture is required" });
  }

  try {
    const isExist = await Buyer.findOne({ username });
    if (isExist) {
      return res.send({ success: false, error: "user already exists" });
    }
    const newBuyer = await new Buyer({
      username,
      password,
      city,
      Photo,
      name,
      favouriteSellers,
      memberSince,
    }).save();
    res.send(newBuyer);
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const loginBuyer = async (req, res) => {
  const { username, password } = req.body;
  try {
    const isExist = await Buyer.findOne({ username });
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
const deleteBuyer = async (req, res) => {
  const { id } = req.params;
  try {
    const removeBuyer = await Buyer.findByIdAndDelete(id);
    if (removeBuyer) {
      return res.send({
        success: true,
        message: "Buyer is deleted successfully",
      });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const getAllBuyers = async (req, res) => {
  try {
    const allBuyers = await Buyer.find({});
    if (allBuyers) {
      return res.send({ success: true, data: allBuyers });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const getSingleBuyerWithId = async (req, res) => {
  const { id } = req.params;
  try {
    const buyer = await Buyer.findById(id);
    if (buyer) {
      return res.send({ success: true, data: buyer });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const updateBuyer = async (req, res) => {
  const { id } = req.params;

  try {
    const updateBuyer = await Buyer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updateBuyer) {
      return res.send({ success: true, message: "profile update!!" });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const bookCleaner = async (req, res) => {
  const { cleanerId } = req.body;
  const { id } = req.params;
  try {
    const bookedCleaner = await Buyer.findByIdAndUpdate(
      id,
      { bookedCleaner: cleanerId },
      { new: true }
    );
    if (bookedCleaner) return res.send({ success: true, bookedCleaner });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const addToFavourite = async (req, res) => {
  const { id } = req.params;
  const { cleanerId } = req.body;
  try {
    const { favouriteSellers } = await Buyer.findOne({ _id: id }).select({
      _id: 0,
      favouriteSellers: 1,
    });
    const addFavourite = await Buyer.findByIdAndUpdate(
      id,
      { favouriteSellers: [...favouriteSellers, cleanerId] },
      { new: true }
    );
    if (addFavourite) {
      return res.send({ success: true, addFavourite });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const loginWithGoogle = async (req, res) => {};
const loginWithFacebook = async (req, res) => {};
const loginWithTwitter = async (req, res) => {};

module.exports = {
  addBuyer,
  loginWithTwitter,
  loginWithFacebook,
  loginWithGoogle,
  loginBuyer,
  deleteBuyer,
  getAllBuyers,
  getSingleBuyerWithId,
  updateBuyer,
  bookCleaner,
  addToFavourite,
};
