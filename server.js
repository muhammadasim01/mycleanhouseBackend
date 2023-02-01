require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbconnection = require("./database/dbconnection");
const cleanerRoutes = require("./routes/cleanerRoutes");
const buyerRoutes = require("./routes/buyerRoutes");
const adminroutes = require("./routes/adminRoutes");
const bookServiceroutes = require("./routes/bookedServiceRoutes");
const blogRoutes = require("./routes/blogRoute");
const chatRoutes = require("./routes/chatRoutes");
const messageRoute = require("./routes/messageRoute");
// const { text } = require("body-parser");

const app = express();
dbconnection();

app.get("/", (req, res) => {
  res.send("CLEAN HOUSE ADMIN PANEL");
});

app.use(cors());
app.use(bodyParser.json());
app.use("/cleaner", cleanerRoutes);
app.use("/buyer", buyerRoutes);
app.use("/admin", adminroutes);
app.use("/blog", blogRoutes);
app.use("/chat", chatRoutes);
app.use("/messages", messageRoute);
app.use(bookServiceroutes);

app.listen(process.env.PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT ${process.env.PORT} `);
});
