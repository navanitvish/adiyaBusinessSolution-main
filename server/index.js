require("dotenv").config();
const port = process.env.PORT || 7000;
const app = require("./app");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("OOPS! database connection failed", err);
  });

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
