const express = require("express");

const router = express.Router();

router.post("/create", async (req, res) => {
  res.send("ok");
});

module.exports = router;
