const router = require('express').Router()
const placeController = require('../controllers/PlaceController')

router.post('/', placeController.addPlace)
router.get('/:id', placeController.getPlace)
router.get('/', placeController.getPlaces)
router.get('/counrty/:id', placeController.getPlacesByCountry)

module.exports = router