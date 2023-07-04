const express = require("express")
const app = express();

app.use(express.json())

const AuthRoute = require("./routes/auth")
app.use("/", AuthRoute)

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);

// })
// app.get('/', (req, res) => {
//     res.send("hello");

// })
app.listen(8000, () => { console.log("server listening at port 8000"); })
