const mongoose = require('mongoose');
const validator = require('validator');

const employeeSchema = new mongoose.Schema({
    user_id: {
        type: Number
            // required: true
    },
    name: {
        type: "String",
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Id");
            }
        }
    },
    salary: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});


// we will create a new collection

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;