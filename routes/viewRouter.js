const express = require("express");

const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");
const jobController = require("../controllers/JobController");
const applicationController = require("../controllers/applicationController");
const router = express.Router();

router.get("/", viewController.getLandingPage);
router.get("/login", viewController.getLoginPage);

router.get("/dashboard/stats", authController.protect, viewController.getStats);
router.get(
  "/dashboard/all-jobs",
  authController.protect,
  viewController.getAllJobs
);

router.get(
  "/dashboard/all-jobs/job/:id",
  authController.protect,
  viewController.getJob
);
router.get(
  "/dashboard/add-jobs",
  authController.protect,
  authController.restrictTo("admin", "recruiter"),
  viewController.getAddJobs
);
router.get(
  "/dashboard/application",
  authController.protect,
  viewController.getApplication
);

router.post(
  "/application",
  authController.protect,
  applicationController.uploadResume,
  applicationController.createApplication
);

router.get(
  "/application/applicants-review",
  authController.protect,
  viewController.getApplicants
);

router.get(
  "/dashboard/my-jobs",
  authController.protect,
  authController.restrictTo("admin", "recruiter"),
  viewController.getMyJobs
);

router.get("/dashboard/profile", authController.protect, viewController.getme);
module.exports = router;
