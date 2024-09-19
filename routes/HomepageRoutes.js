const { Router } = require("express");
const router = Router();
const { HomepageGet } = require("../controllers/HomepageController");

router.get("/", HomepageGet);
module.exports = router;
