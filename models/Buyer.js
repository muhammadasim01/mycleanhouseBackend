const mongoose = require("mongoose");
const buyerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  memberSince: {
    type: Date,
    required: true,
  },
  favouriteSellers: [
    {
      type: String,
    },
  ],
});

const Buyer = mongoose.model("Buyer", buyerSchema, "Buyer");
module.exports = Buyer;
