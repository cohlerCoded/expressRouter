const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelter");

app.use("/shelters", shelterRoutes);

app.listen(3000, () => {
  console.log("Serving app on localhost:3000");
});
