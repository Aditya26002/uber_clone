const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("vehichle.color")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("vehichle.plate")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("vehichle.capacity")
      .isLength({ min: 1 })
      .withMessage("First name must be at least 1 characters long"),
  ],
  captainController.registerCaptain
);

module.exports = router;
