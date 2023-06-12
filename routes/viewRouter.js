const express  = require('express')

const viewController = require('../controllers/viewController')
const authController = require('../controllers/authController')

const router = express.Router()

router.get('/',viewController.getLandingPage)
router.get('/login',viewController.getLoginPage)


router.get('/dashboard/stats',authController.protect,viewController.getStats)
router.get('/dashboard/all-jobs',authController.protect,viewController.getAllJobs)
router.get('/dashboard/add-jobs',authController.protect,viewController.getAddJobs)
router.get('/dashboard/profile',authController.protect,viewController.getme)

module.exports = router