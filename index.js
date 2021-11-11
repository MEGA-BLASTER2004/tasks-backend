const express = require("express");
const cors = require('cors')

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(cors())

app.post("/users", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log("Server is listening on", port);
});
