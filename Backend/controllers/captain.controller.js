const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const bcrypt = require("bcrypt");

module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehichle } = req.body;

  const captainExists = await captainModel.findOne({ email });
  if (captainExists) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashedPassword = await bcrypt.hash(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    hashedPassword: hashedPassword,
    vehichleType: vehichle.type,
    color: vehichle.color,
    capacity: vehichle.capacity,
    plate: vehichle.plate,
  });

  const token = captain.generateAuthToken();

  res.status(201).json({ token, captain });
};
