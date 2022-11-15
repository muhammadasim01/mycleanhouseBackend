const mongoose = require("mongoose");
const bookedServiceSchema = new mongoose.Schema({
  //booking info
  buyerId: {
    type: String,
  },
  CleaningServiceType: [
    {
      type: String,
    },
  ],
  notToCleanArea: {
    type: String,
  },
  cleaningAreaType: {
    type: String,
  },
  otherCleaningAreaType: {
    type: String,
  },
  howOftenToClean: {
    type: String,
  },
  lastCleanedTime: {
    type: String,
  },
  sizeOfProperty: {
    type: String,
  },
  wholePropertyClean: {
    type: Boolean,
  },
  noOfPropertyLevel: {
    type: Number,
  },
  noOfBedrooms: {
    type: String,
  },
  bedroomPriorityArea: {
    type: String,
  },
  notToCleanBedroomArea: {
    type: String,
  },
  noOfExtraBedrooms: {
    type: Number,
  },
  extraBedroomTasks: [
    {
      type: String,
    },
  ],
  noOfBathrooms: {
    type: Number,
  },
  bathroomPriorityArea: {
    type: String,
  },
  notToCleanBathroomArea: {
    type: String,
  },
  noOfExtraBathrooms: {
    type: Number,
  },
  extraBathroomTasks: [
    {
      type: String,
    },
  ],
  noOfLivingRooms: {
    type: Number,
  },
  livingRoomPriorityArea: {
    type: String,
  },
  notToCleanLivingRoomArea: {
    type: String,
  },
  noOfExtraLivingRooms: {
    type: Number,
  },
  extraLivingRoomTasks: [
    {
      type: String,
    },
  ],
  noOfOtherExtraRooms: {
    type: Number,
  },
  otherExtraRooms: {
    type: String,
  },
  notToCleanOtherExtraRoomArea: {
    type: String,
  },
  noOfExtraLivingRooms: {
    type: Number,
  },
  otherExtraRoomTasks: [
    {
      type: String,
    },
  ],
  noOfKitchens: {
    type: Number,
  },
  kitchenPriorityArea: {
    type: String,
  },
  notToCleanKitchenArea: {
    type: String,
  },
  noOfExtraKitchens: {
    type: Number,
  },
  extraKitchenTasks: [
    {
      type: String,
    },
  ],
  laundry: {
    type: Boolean,
  },
  laundryPriority: {
    type: Boolean,
  },
  noOfLaundryLoads: {
    type: Number,
  },
  laundryInstructions: {
    typr: String,
  },
  ironing: {
    type: Boolean,
  },
  ironingPriority: {
    type: Boolean,
  },
  noOfIroningPieces: {
    type: Number,
  },
  ironingInstructions: {
    typr: String,
  },
  organizing: {
    type: Boolean,
  },
  organizingPriority: {
    type: Boolean,
  },
  organizingExtraTime: {
    type: String,
  },
  applianceCleaningOnly: {
    typr: Boolean,
  },
  applianceCleaningTime: {
    type: String,
  },
  appliancesToClean: {
    type: String,
  },
  stoveClean: {
    type: String,
  },
  timeEstimate: {
    type: String,
  },
  cleanerAccessType: {
    type: String,
  },
  keyHidden: {
    type: String,
  },
  keySafeCode: {
    type: String,
  },
  alarmSystem: {
    type: Boolean,
  },
  alarmCode: {
    type: String,
  },
  visitorParking: {
    type: Boolean,
  },
  isPetsAvailable: {
    type: Boolean,
  },
  petsDetails: {
    type: String,
  },
  dogsDetails: {
    type: String,
  },
  positionsOfProductAndSupplies: {
    type: String,
  },
  otherNotesForCleaner: {
    type: String,
  },
  //date and time
  cleaningDate: {
    type: String,
  },
  cleaningTime: {
    type: String,
  },
  //address
  notifyMe: {
    type: String,
  },
  fullName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  country: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  //paymentInfo
  cardNumber: {
    type: Number,
  },
  expiryDate: {
    type: String,
  },
  cvc: {
    type: Number,
  },
});

const bookedService = new mongoose.model(
  "bookedService",
  bookedServiceSchema,
  "bookedService"
);
module.exports = bookedService;
