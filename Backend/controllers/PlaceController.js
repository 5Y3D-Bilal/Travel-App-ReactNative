const Place = require('../models/PlaceModel')

module.exports = {
    addPlace: async (req, res, next) => {
        const { country_id, description, imageUrl, location, title, rating, review, latitdue, longitude } = req.body

        try {
            const newPlace = new Place({
                country_id, description, imageUrl, location, title, rating, review, latitdue, longitude
            })

            await newPlace.save()
            res.status(201).json({ status: true, message: "Place Added" })
        } catch (error) {
            return next(error)
        }
    },
    getPlaces: async (req, res, next) => {
        try {
            const places = await Place.find({}, { _id: 1, review: 1, rating: 1, imageUrl: 1, title: 1, country_id: 1 })
            res.status(200).json({ places });
        } catch (error) {
            return next(error)

        }
    },
    getPlace: async (req, res, next) => {
        const place_id = req.params.id
        try {
            const place = await Place.findById(place_id, { createdAt: 0, updatedAt: 0, __v: 0 });
            res.status(200).json({
                place
            })
        } catch (error) {
            return next(error);
        }
    },
    getPlacesByCountry: async (req, res, next) => {
        const countryID = req.params.id
        try {
            const places = await Place.find({ country_id: countryID }, { updatedAt: 0, __v: 0 })
            res.status(200).json({ status: true, places })
        } catch (error) {
            return next(error)
        }
    }
}