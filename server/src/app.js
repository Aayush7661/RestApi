const express = require('express');
const cors = require('cors');
const app = express();
const Employee = require('./modules/employee');
require('./db/conn');
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello main ");
});

app.post("/employee", async(req, res) => {

    try {

        const user = new Employee(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }
})


app.get("/employee", async(req, res) => {

    try {

        const employeeData = await Employee.find();
        res.send(employeeData);

    } catch (e) {
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log("connection success",
        port
    );
})