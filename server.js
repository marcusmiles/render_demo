const express = require("express");
const app = express();

const port = 3001

app.use(express.json());
app.use(express.static("./client/build"))


app.get("/api/test", (req, res) => {
    res.json({ result: "success"});
});

app.listen(port, ()=> {
    console.log("Server is running on port: "+port);
});