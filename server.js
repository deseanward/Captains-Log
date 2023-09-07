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
app.use(methodOverride("_method"));

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

// ----
// ----- Show Log ----- //
app.get("/logs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const log = await Log.findById(id);

    res.render("Show", { log });
  } catch (error) {
    console.log("An error occured fetching the log: ", error);
  }
});

// ----
// ----- Display Edit Log Page ----- //
app.get("/logs/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const log = await Log.findById(id);

    res.render("Edit", { log });
  } catch (error) {
    console.log("An error occured fetching the log: ", error);
  }
});

// ***** API ROUTES ***** //
// Post the Log to the database
app.post("/api/logs", async (req, res) => {
  try {
    const createdLog = await Log.create(req.body);

    res.redirect("/logs");
  } catch (error) {
    console.log("There was an error creating the log: ", error);
  }
});

// Update the log and put to the database
app.post("/api/logs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { shipIsBroken } = req.body;

    shipIsBroken === "on"
      ? (req.body.shipIsBroken = true)
      : (req.body.shipIsBroken = false);

    const updatedLog = await Log.findByIdAndUpdate(id, req.body, { new: true });

    res.redirect(`/logs/${id}`);
  } catch (error) {
    console.log("An error occured updating the log: ", error);
  }
});

// ---- Verify Connections ---- //
connectDB();

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
