const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getSummary,
  getChartData,
  getTableData,
} = require("../controllers/dashboardController");

router.get("/summary", auth, getSummary);
router.get("/chart", auth, getChartData);
router.get("/table", auth, getTableData);

module.exports = router;
