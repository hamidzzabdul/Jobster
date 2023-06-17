const Job = require("../models/jobModel");
const catchAsync = require("../utils/catchAsync");

exports.getLandingPage = async (req, res) => {
  try {
    res.status(200).render("overview", {
      title: "overview",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getLoginPage = async (req, res) => {
  try {
    res.status(200).render("login", {
      title: "login",
    });
  } catch (error) {
    console.log(error);
  }
};

// dashboard
exports.getStats = catchAsync(async (req, res) => {
  const docs = await Job.countDocuments();
  res.status(200).render("partials/stats", {
    title: "stats",
    jobs: docs,
  });
});

exports.getAllJobs = catchAsync(async (req, res) => {
  const jobs = await Job.find();

  res.status(200).render("partials/alljobs", {
    title: "alljobs",
    result: jobs.length,
    jobs,
  });
});
exports.getAddJobs = async (req, res) => {
  try {
    res.status(200).render("partials/addjobs", {
      title: "addjobs",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getme = async (req, res) => {
  try {
    res.status(200).render("partials/profile", {
      title: "user-profile",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getJob = async (req, res) => {
  try {
    const doc = await Job.findById(req.params.id);
    res.status(200).render("partials/job", {
      title: "job",
      job: doc,
    });
  } catch (error) {
    console.log(error.message);
  }
};
exports.getApplication = async (req, res) => {
  try {
    res.status(200).render("partials/application", {
      title: "application",
    });
  } catch (error) {
    console.log(error);
  }
};
