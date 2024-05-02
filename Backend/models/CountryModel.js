const mongoose = require('mongoose');

const ContrySchema = new mongoose.Schema({
    country: {
        type: String,
        requie: true
    },
    description: {
        type: String,
        requie: true
    },
    imageUrl: {
        type: String,
        requie: true
    },
    region: {
        type: String,
        requie: true
    },
    popular: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Place"
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model("Counrty", ContrySchema)