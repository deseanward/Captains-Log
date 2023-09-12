const Log = require("../models/log");

module.exports = {
  getLogs: async (req, res) => {
    const logs = await Log.find({});

    try {
      res.render("Index", {
        logs: logs,
      });
    } catch (error) {
      console.log("An error occured: ", error);
    }
  },

  newLog: async (req, res) => {
    res.render("New", {});
  },

  displayLog: async (req, res) => {
    try {
      const { id } = req.params;
      const log = await Log.findById(id);

      res.render("Show", { log });
    } catch (error) {
      console.log("An error occured fetching the log: ", error);
    }
  },

  editLog: async (req, res) => {
    try {
      const { id } = req.params;
      const log = await Log.findById(id);
  
      res.render("Edit", { log });
    } catch (error) {
      console.log("An error occured fetching the log: ", error);
    }
  },

  createLog: async (req, res) => {
    try {
      const createdLog = await Log.create(req.body);
  
      res.redirect("/logs");
    } catch (error) {
      console.log("There was an error creating the log: ", error);
    }
  },

  updateLog: async (req, res) => {
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
  },

  deleteLog: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedLog = await Log.findByIdAndDelete(id);
  
      res.redirect("/logs");
    } catch (error) {
      console.log("An error occured deleting the log: ", error);
    }
  }
};
