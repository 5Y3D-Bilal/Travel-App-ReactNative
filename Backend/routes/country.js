const router = require('express').Router()
const countryController = require('../controllers/CountryController')

router.post('/', countryController.addCountry)
router.get('/', countryController.getCountries)
router.get('/:id', countryController.getCountry)

module.exports = router