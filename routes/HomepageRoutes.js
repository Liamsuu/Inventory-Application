const { Router } = require("express");
const router = Router();
const {
  HomepageGet,
  removeProductFromDb,
} = require("../controllers/HomepageController");
const { getListings } = require("../controllers/CategoryController");

router.get("/", HomepageGet);
router.post("/category-choice", getListings);
router.post("/delete-product", removeProductFromDb);
module.exports = router;
