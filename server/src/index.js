const express = require("express");
const cors = require("cors");
const { PORT, FRONTEND_ORIGIN } = require("./config/env");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true });
});

// Routes
app.use("/api", contactRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
