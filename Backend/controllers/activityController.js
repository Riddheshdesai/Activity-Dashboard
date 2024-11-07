const { calculateInsights } = require("../utils/insightsUtils");

const { ACTIVITY_DATA } = require("../utils/activityData");

//* Get all activity data
const getActivityData = async (req, res) => {
  try {
    const insights = calculateInsights(ACTIVITY_DATA);
    res.json(insights);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activity data" });
  }
};
module.exports = { getActivityData };
