const mongoose = require('mongoose');

const pro = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [3, "name must be at least 3 characters long"],
},

number: {
    type: String,
    required: [true, "number required"],

},

status: {
    type: String,
    required: [true, "sataus required"],

}}, { timestamps: true });

module.exports = mongoose.model('pro', pro)
