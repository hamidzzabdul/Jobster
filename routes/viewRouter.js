const express  = require('express')

const viewController = require('../controllers/viewController')
const router = express.Router()

router.get('/',viewController.getLandingPage)
router.get('/login',viewController.getLoginPage)

router.get('/dashboard/stats',viewController.getStats)
router.get('/dashboard/all-jobs',viewController.getAllJobs)
router.get('/dashboard/add-jobs',viewController.getAddJobs)
router.get('/dashboard/profile',viewController.getme)

module.exports = router