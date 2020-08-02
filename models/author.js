const mongoose = require("mongoose")

//Create a schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Auhor", authorSchema)