const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

// app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/users')

const User = new mongoose.model('Cat', 
    {
        name: String,
        age: Number,
        password: String
    }
)


const daniel = new User(
    {
        name: "Daniel",
        age: 12,
        password: "123"
    }
)

// daniel.save().then(console.log("Daniel is saved"))
const app = express();

app.get("/", (req, res) => {
    const person = User.find({name: "Kebede"}).then(persons => console.log(persons))
    res.send("<h1>Hello World</h1>");
});

app.post("/", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const password = req.body.password;
    User.insertOne({name: name, age: age, password: password})
})

app.listen(5000, console.log("server is running"))