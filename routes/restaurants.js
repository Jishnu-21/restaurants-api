const express = require('express')
const { getAllRestaurants,createRestaurants, getRestaurant, editRestaurant,deleteRestaurant } = require('../controllers/restaurantController')
const router = express.Router()


router.get('/',getAllRestaurants)
router.post('/',createRestaurants)
router.get('/:id',getRestaurant)
router.put('/:id',editRestaurant)
router.delete('/:id',deleteRestaurant)

module.exports = router