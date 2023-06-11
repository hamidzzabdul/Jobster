const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Jobs = require("../models/jobModel");
const factory = require("./handerFactory")


exports.getAllJobs = factory.getAll(Jobs)
exports.createJobs = factory.createOne(Jobs)
exports.deleteJob = factory.deleteOne(Jobs)
exports.updateJob = factory.updateOne(Jobs)
exports.getOneJob =factory.getOne(Jobs)