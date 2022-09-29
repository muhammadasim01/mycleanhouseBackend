const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cleanerSchema = new mongoose.Schema({
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
  pricePerHour: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  reviews: [
    {
      type: String,
    },
  ],
  experienceInYear: {
    type: Number,
    required: true,
  },
  memberSince: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  isOnline: {
    type: Boolean,
    required: true,
  },
  languages: [
    {
      type: String,
      required: true,
    },
  ],
  services: [
    {
      type: String,
      required: true,
    },
  ],
  isCertified: {
    type: Boolean,
    required: true,
  },
  policeClearanceCheck: {
    type: Boolean,
    required: true,
  },
  petFriendly: {
    type: Boolean,
    required: true,
  },
  singleMaleClient: {
    type: Boolean,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

cleanerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

cleanerSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    { id: this._id, name: this.name },
    process.env.SECRET_KEY
  );
  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};

const Cleaner = mongoose.model("Cleaner", cleanerSchema, "Cleaner");
module.exports = Cleaner;
