const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const buyerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  city: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  country: {
    required: true,
    type: String,
  },
  phone: { type: String, required: true },
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
  howDidYouHearAboutUs: {
    type: String,
  },
  notifyMe: {
    type: Boolean,
  },
  code: {
    type: Number,
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
