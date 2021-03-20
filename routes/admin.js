const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("YOU SHALL NOT PASS");
});

router.get("/topsecret", (req, res) => {
  res.send("SHHHHHHHHHHHH");
});
router.get("/deleteEverything", (req, res) => {
  res.send("ALL GONE");
});

module.exports = router;
