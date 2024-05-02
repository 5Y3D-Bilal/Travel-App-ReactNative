const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    country_id: {
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
    location: {
        type: String,
        requie: true
    },
    title: {
        type: String,
        requie: true
    },
    rating: {
        type: String,
        requie: true
    },
    review: {
        type: String,
        requie: true
    },
    latitude: {
        type: Number,
        requie: true
    },
    longitude: {
        type: String,
        requie: true
    },
    popular: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel"
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model("Place", PlaceSchema)