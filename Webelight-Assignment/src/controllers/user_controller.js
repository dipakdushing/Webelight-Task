const express = require("express");
const User = require("../models/user_model");
const router = express.Router();
const athenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");
router.get("/", athenticate, authorise("admin"), async (req, res) => {
  try {
    const users = await User.find({roll:"customer"}).lean().exec();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
module.exports = router;
