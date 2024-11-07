const express = require("express");
const cors = require("cors");

const activityRoute = require("./routes/activityRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

//* Create the Express app
const app = express();
const port = process.env.PORT || 3000;

//* Middleware setup
app.use(cors());
app.use(express.json());

//* Routes
app.use("/api/customer-activity", activityRoute);

//* Error handler middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
