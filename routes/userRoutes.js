const express = require("express");

const userController = require("../controllers/userController");
const AuthController = require("../controllers/authController");
const router = express.Router();

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signUp);
router.get("/logout", AuthController.logout);

router.use(AuthController.protect);

router.route("/me", userController.updateMe);

router.use(AuthController.restrictTo("admin"));
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser)
  .delete(userController.deleteAllUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);
module.exports = router;
