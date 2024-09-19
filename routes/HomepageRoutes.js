const { Router } = require("express");
const router = Router();
const { HomepageGet } = require("../controllers/HomepageController");
const { getListings } = require("../controllers/CategoryController");

router.get("/", HomepageGet);
router.post("/category-choice", getListings);
module.exports = router;
