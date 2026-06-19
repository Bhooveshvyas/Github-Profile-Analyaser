require("dotenv").config();


const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const profileRoutes = require("./src/Routes/profile.routes.js");  


//Routes
app.use("/api", profileRoutes);

app.get("/", (req, res) => {

  res.json({
    message:
      "GitHub Profile Analyzer API Running"
  });
});

app.listen(process.env.PORT, () => {

  console.log(
    `Server running on port ${process.env.PORT}`
  );
});