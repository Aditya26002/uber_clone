const rideModel = require("../models/ride.model");
const mapService = require("./maps.service");

module.exports.createRide = async (userId, pickup, destination) => {};

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination)
    .distance;

  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };

  const perKmFare = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  const fare = {
    auto:
      baseFare.auto +
      distanceTime.distance * perKmFare.auto +
      distanceTime.time * perMinuteRate.auto,

    car:
      baseFare.car +
      distanceTime.distance * perKmFare.car +
      distanceTime.time * perMinuteRate.car,

    moto:
      baseFare.moto +
      distanceTime.distance * perKmFare.moto +
      distanceTime.time * perMinuteRate.moto,
  };

  return fare;
}
