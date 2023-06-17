const multer = require("multer");
const path = require("path");
const catchAsync = require("../utils/catchAsync");
const Application = require("../models/applicationModel");
const AppError = require("../utils/appError");
// configure multer for handling fill uploads

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/uploads/resumes");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${extension}`);
  },
});

const upload = multer({
  storage,
});

exports.uploadResume = upload.single("resume");
exports.createApplication = catchAsync(async (req, res, next) => {
  const { name, email, phoneNumber, jobId, userId } = req.body;
  const resumePath = req.file.path;
  const doc = await Application.create({
    name,
    email,
    phoneNumber,
    resume: resumePath,
    job: jobId,
    user: userId,
  });

  if (!doc) {
    return next(new AppError("Please enter all fields", 401));
  }

  res.status(201).json({
    status: "success",
    data: {
      doc,
    },
  });
});
