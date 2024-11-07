const express = require("express");
const router = express.Router();

const { getActivityData } = require("../controllers/activityController");

router.get("/", getActivityData);

module.exports = router;
