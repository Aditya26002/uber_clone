const captainModel = require("../models/captain.model");

module.exports.createCaptain = async (
  { firstname, lastname },
  email,
  password,
  vehichleType,
  color,
  capacity,
  plate
) => {
  if (
    !fullname.firstname ||
    !email ||
    !password ||
    !vehichleType ||
    !color ||
    !capacity ||
    !plate
  ) {
    throw new Error("All fields are required");
  }

  const captain = await captainModel.create({
    firstname,
    lastname,
    email,
    password,
    vehichleType,
    color,
    capacity,
    plate,
  });

  return captain;
};
