const express = require("express");
const app = express();
const PORT=process.env.PORT || 5000;

app.get("/landing", (request, response) => {
  response.send("{Hi:World}");
});

app.listen(PORT, () => {
  console.log("Listening on port"+ PORT);
});
