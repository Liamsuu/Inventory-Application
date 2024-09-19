const { Router } = require("express");
const { addItemGet, addItemPost } = require("../controllers/ItemController");
const router = Router();

router.get("/add-item", addItemGet);
router.post("/add-item", addItemPost);

module.exports = router;
