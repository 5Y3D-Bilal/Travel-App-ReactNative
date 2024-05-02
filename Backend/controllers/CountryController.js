const Country = require('../models/CountryModel')

module.exports = {
    addCountry: async (req, res, next) => {
        const { country, description, imageUrl, region, popular } = req.body

        try {
            const newCountry = new Country({
                country, description, imageUrl, region, popular
            })

            await newCountry.save()

            res.status(201).json({ status: true })
        } catch (error) {
            return next(error)
        }
    },
    addPlacesToCountry: async (req, res, next) => {

    },
    getCountries: async (req, res, next) => {
        try {
            const countries = await Country.find({}, { country: 1, _id: 1, imageUrl: 1, popular: 1 })
            res.status(200).json({
                countries
            })
        } catch (error) {
            return next(error)
        }
    },
    getCountry: async (req, res, next) => {
        const countryId = req.params.id
        console.log(countryId)
        try {
            const country = await Country.findById({ _id: countryId }, { password: 0, __v: 0, createdAt: 0, updatedAt: 0 })

            if (!country) {
                return res.status(401).json({ status: false, message: "User dose not exist" })
            }

            res.status(200).json(country);
        } catch (error) {
            return next(error)
        }
    }
}