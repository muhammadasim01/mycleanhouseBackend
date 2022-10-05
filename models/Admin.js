const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
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

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

adminSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    { id: this._id, name: this.name },
    process.env.SECRET_KEY
  );
  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};

const Admin = mongoose.model("Admin", adminSchema, "Admin");
module.exports = Admin;
