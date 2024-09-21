const { Router } = require("express");
const router = Router();
const {
  HomepageGet,
  removeProductFromDb,
  updateItemInDbGet,
  updateItemInDbPost,
} = require("../controllers/HomepageController");
const { getListings } = require("../controllers/CategoryController");

router.get("/", HomepageGet);
router.get("/update-product", updateItemInDbGet);
router.post("/category-choice", getListings);
router.post("/delete-product", removeProductFromDb);
router.post("/update-product", updateItemInDbPost);

module.exports = router;
