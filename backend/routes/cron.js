const express = require("express");
const router = new express.Router();

router.get("/", function (req, res, next) {
  try {
    return res.json({cronResponse:"CRON JOB SUCCESSFUL!"});
  }

  catch (err) {
    return next(err);
  }
});

module.exports = router;
