require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbconnection = require("./database/dbconnection");
const cleanerRoutes = require("./routes/cleanerRoutes");
const buyerRoutes = require("./routes/buyerRoutes");
const adminroutes = require("./routes/adminRoutes");

const app = express();
dbconnection();

app.use(cors());
app.use(bodyParser.json());
app.use("/cleaner", cleanerRoutes);
app.use("/buyer", buyerRoutes);
app.use("/admin", adminroutes);

app.listen(process.env.PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT ${process.env.PORT} `);
});
