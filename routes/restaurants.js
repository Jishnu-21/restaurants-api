const express = require('express')
const { getAllRestaurants,createRestaurants, getRestaurant,deleteRestaurant, updateRestaurant } = require('../controllers/restaurantController')
const router = express.Router()


router.get('/',getAllRestaurants)
router.post('/',createRestaurants)
router.get('/:id',getRestaurant)
router.put('/:id',updateRestaurant)
router.delete('/:id',deleteRestaurant)

module.exports = router