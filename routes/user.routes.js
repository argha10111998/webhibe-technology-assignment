const router = require("express").Router();
const auth = require("../midleware/auth");
const controller = require("../controllers/user.controller");

router.get("/info", auth, controller.userInfo);

module.exports = router;
