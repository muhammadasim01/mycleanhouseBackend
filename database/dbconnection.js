const mongoose = require("mongoose");
module.exports = () => {
  mongoose
    .connect(process.env.MONGODBURI)
    .then(() => {
      console.log("DATABASE IS CONNECTED SUCCESSFULLY");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
