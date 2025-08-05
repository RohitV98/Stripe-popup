const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("App1 Widget Server is running");
});

app.listen(PORT, () => {
  console.log(`App1 running at http://localhost:${PORT}`);
});
