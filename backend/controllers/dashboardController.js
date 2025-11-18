const Sale = require("../models/Sale");

// Summary Cards
exports.getSummary = async (req, res) => {
  const totalSales = await Sale.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);
  const totalOrders = await Sale.countDocuments();

  res.json({
    totalSales: totalSales[0]?.total || 0,
    totalOrders,
    inventoryCount: 120 // static demo value
  });
};

// Chart (Sales by Month Jan–Jun)
exports.getChartData = async (req, res) => {
  const data = await Sale.aggregate([
    {
      $group: {
        _id: { $month: "$date" },
        total: { $sum: "$amount" }
      }
    },
    { $sort: { "_id": 1 } }
  ]);

  res.json(data);
};

// Table Data (5–10 rows)
exports.getTableData = async (req, res) => {
  const rows = await Sale.find().limit(10);
  res.json(rows);
};
