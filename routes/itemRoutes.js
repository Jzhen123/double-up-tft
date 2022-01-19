const { Router } = require("express");
const router = Router();

const { getAllItems } = require("../controllers/itemController");


// Read
router.get("/getAllItems", getAllItems);


module.exports = router;