const mongoose = require("mongoose");
const Admin = require("./kt-technology-backend/models/Admin.model.js");
const bcrypt = require("bcryptjs");

mongoose
  .connect("mongodb://localhost:27017/kt-technology") // update url
  .then(async () => {
    const hashed = await bcrypt.hash("admin123", 10);
    await Admin.create({ email: "admin@kt.com", password: hashed });
    console.log("Super admin created");
    process.exit();
  })
  .catch(console.error);
