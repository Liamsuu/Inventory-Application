require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const homepageRoute = require("./routes/HomepageRoutes");
// setting up ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// URL routers
app.use("/", homepageRoute);

// Setting PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
