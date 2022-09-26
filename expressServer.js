const express = require("express");
const app = express();
const port = 8080;

app.get("/home-page", (req, res) => {
res.send("Home page !");
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});
