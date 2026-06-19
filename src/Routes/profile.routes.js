const express = require("express");

const router = express.Router();

const controller = require("../Controllers/profile.controller.js");

router.post("/analyze/:username", controller.analyzeProfile);
router.get("/profiles", controller.getProfiles);
router.get("/profiles/:username", controller.getSingleProfile);
router.get("/compare/:user1/:user2", controller.compareProfiles);

module.exports = router;