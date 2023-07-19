const { Router } = require("express");
const {
  getUsers,
  register,
  login,
  protected,
  logOut,
} = require("../controllers/auth");
const { registerValidation, loginValidation } = require("../validators/auth");
const { userAuth } = require("../middlewares/auth-middleware");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");

const router = Router();

router.get("/get-users", getUsers);
router.get("/protected", userAuth, protected);
router.post("/register", registerValidation, validationMiddleware, register);
router.post("/login", loginValidation, validationMiddleware, login);
router.get("/logout", userAuth, logOut);

module.exports = router;
