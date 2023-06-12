const express = require("express");

const jobController = require("../controllers/JobController");
const authcontroller = require("../controllers/authController");
const router = express.Router();

// crud routers
router
  .route("/")
  .get(jobController.getAllJobs)
  .post(
    authcontroller.isLoggedIn,
    authcontroller.restrictTo("admin", "recruiter"),
    jobController.createJobs
  );

router
  .route("/:id")
  .get(jobController.getOneJob)
  .patch(jobController.updateJob)
  .delete(authcontroller.protect, jobController.deleteJob);

module.exports = router;
