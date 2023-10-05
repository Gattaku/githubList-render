const router = require("express").Router();

router.use("/login", require("./login"));
router.use("/test", require("./test"));

module.exports = router;