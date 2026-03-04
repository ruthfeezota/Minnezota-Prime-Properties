const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();
app.use(compression());

const buildPath = path.join(__dirname, "build");

app.use(
  express.static(buildPath, {
    maxAge: "7d",
  })
);

// Express 5: DO NOT use "*" here
app.get("/*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nAllow: /");
});