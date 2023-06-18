const mongoose = require("mongoose");
const validator = require("validator");

const Job = require("./jobModel");
const User = require("./userModel");

const ApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter a name"],
    },
    email: {
      type: String,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
      trim: true,
      unique: false,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    resume: {
      type: String,
      required: [true, "Please Upload your resume"],
    },
    job: {
      type: mongoose.Schema.ObjectId,
      ref: "Job",
      required: [true, "Application must belong to a job"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Application must belong to a user"],
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", ApplicationSchema);
module.exports = Application;
