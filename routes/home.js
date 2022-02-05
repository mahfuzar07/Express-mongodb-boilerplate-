const { homeController } = require("../controller/homeController");
const router = require("express").Router();

router.get("/", homeController);

module.exports = router;
