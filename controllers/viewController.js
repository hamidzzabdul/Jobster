const Job = require("../models/jobModel");
const Application = require("../models/applicationModel");
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

  const applications = await Application.find({ user: req.user.id });
  res.status(200).render("partials/stats", {
    title: "stats",
    jobs: docs,
    applications,
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
    const applications = await Application.find({ user: req.user.id });
    const jobId = applications.map((application) => application.job);
    let jobs = [];
    let jobsApplicants = [];
    const userRole = req.user.role;
    if (userRole === "user") {
      jobs = await Job.find({ _id: { $in: jobId } });
    } else {
      jobs = await Job.find({ createdBy: req.user.id });
      jobsApplicants = await Application.find({
        job: { $in: jobs.map((job) => job._id) },
      });
    }

    res.status(200).render("partials/application", {
      title: "application",
      applications,
      jobs,
      jobsApplicants,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getMyJobs = async (req, res) => {
  try {
    const userId = req.user._id;
    const doc = await Job.find({ createdBy: userId });

    res.status(200).render("partials/myjobs", {
      title: "My-jobs",
      jobs: doc,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getApplicants = async (req, res) => {
  try {
    res.status(200).render("partials/applicants", {
      title: "applicants",
    });
  } catch (error) {
    console.log(error.message);
  }
};
