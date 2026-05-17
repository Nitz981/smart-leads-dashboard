import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Lead from "./models/lead";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });


// GET ALL LEADS
app.get("/api/leads", async (req, res) => {
  try {
    const leads = await Lead.find();

    res.json(leads);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching leads",
    });
  }
});


// ADD NEW LEAD
app.post("/api/leads", async (req, res) => {
  try {
    const { name, email, status, source } =
      req.body;

    const newLead = new Lead({
      name,
      email,
      status,
      source,
    });

    await newLead.save();

    res.status(201).json(newLead);
  } catch (error) {
    res.status(500).json({
      message: "Error adding lead",
    });
  }
});


// DELETE LEAD
app.delete(
  "/api/leads/:id",
  async (req, res) => {
    try {
      await Lead.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message: "Lead deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error deleting lead",
      });
    }
  }
);

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});