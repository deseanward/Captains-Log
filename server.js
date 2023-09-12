// Setup Express
const express = require("express");
require("dotenv").config();
const connectDB = require("./utils/connectDB");
const Log = require("./models/log");
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const controller = require("./controllers/logs");

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

//* ---------------------------------------------
// ***** VIEW ROUTES ***** //
//* ---------------------------------------------
// ---- Index - View Log ---- //
app.get("/logs", controller.getLogs);

// ----
// ----- Create New Log ----- //
app.get("/logs/new", controller.newLog);

// ----
// ----- Show Log ----- //
app.get("/logs/:id", controller.displayLog);

// ----
// ----- Display Edit Log Page ----- //
app.get("/logs/:id/edit", controller.editLog);

//* ---------------------------------------------
// ***** API ROUTES ***** //
//* ---------------------------------------------
// Post the Log to the database
app.post("/api/logs", controller.createLog);

// Update the log and put to the database
app.put("/api/logs/:id", controller.updateLog);

// Delete the log from the database
app.delete("/api/logs/:id", controller.deleteLog);

// ---- Verify Connections ---- //
connectDB();

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
