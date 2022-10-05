const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

const adminregister = async (req, res) => {
  const { username, password, name } = req.body;
  try {
    const isExist = await Admin.findOne({ username });
    if (isExist) {
      return res.send({ success: false, error: "user already exists" });
    }
    const newAdmin = await new Admin({
      username,
      password,
      name,
    }).save();
    res.send(newAdmin);
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const adminlogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const isExist = await Admin.findOne({ username });
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

module.exports = { adminlogin, adminregister };
