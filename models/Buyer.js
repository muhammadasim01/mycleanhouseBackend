const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
  Photo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  memberSince: {
    type: Date,
    default: Date.now(),
  },
  favouriteSellers: [
    {
      type: String,
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  bookedCleaner: {
    CleanerId: String,
  },
});

buyerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

buyerSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    { id: this._id, name: this.name },
    process.env.SECRET_KEY
  );
  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};

const Buyer = mongoose.model("Buyer", buyerSchema, "Buyer");
module.exports = Buyer;
