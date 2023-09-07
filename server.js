// Setup Express
const express = require("express");
require("dotenv").config();
const connectDB = require("./utils/connectDB");
const Log = require("./models/log");
const jsxEngine = require("jsx-view-engine");

// App Variables
const app = express();
const PORT = process.env.PORT || 3000;

// ---- App Config ---- //
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// ---- Middleware ---- //
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// ***** VIEW ROUTES ***** //
// ---- Index - View Log ---- //
app.get("/logs", async (req, res) => {
  const logs = await Log.find({});
  console.log(logs);
  
  try {
    res.render("Index", {
      logs: logs,
    });
  } catch (error) {
    console.log("An error occured: ", error);
  }
});

// ----
// ----- Create New Log ----- //
app.get("/logs/new", (req, res) => {
  res.render("New", {});
});

// ***** API ROUTES ***** //
app.post("/api/logs", async (req, res) => {
  try {
    const createdLog = await Log.create(req.body);

    res.redirect("/logs");
  } catch (error) {
    console.log("There was an error creating the log: ", error);
  }
});

// ---- Verify Connections ---- //
connectDB();

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
