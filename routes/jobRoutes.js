const express = require("express");

const jobController = require("../controllers/JobController");

const router = express.Router();



// crud routers
router
    .route("/")
    .get(jobController.getAllJobs)
    .post(jobController.createJobs)
router
    .route('/:id')
    .get(jobController.getOneJob)
    .patch(jobController.updateJob)
    .delete(jobController.deleteJob)


module.exports = router;
