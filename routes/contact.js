// backend/routes/contact.js
const express = require("express");
const ContactMessage = require("../models/ContactMessage");

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await ContactMessage.create({ name, email, message });

    res.status(201).json({ message: "Message received successfully" });
  } catch (err) {
    console.error("Error saving contact message:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
