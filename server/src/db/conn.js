const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/employee-api").then(() => {
    console.log("connection successfull");
}).catch((e) => {
    console.log("No connection");
})