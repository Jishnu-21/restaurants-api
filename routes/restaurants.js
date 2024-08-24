const express = require('express')
const { getAllRestaurants,createRestaurants, getRestaurant,deleteRestaurant, updateRestaurant } = require('../controllers/restaurantController')
const router = express.Router()
const authenticate = require('../middleware/authMiddleware');


router.get('/',authenticate,getAllRestaurants)
router.post('/',authenticate,createRestaurants)
router.get('/:id',authenticate,getRestaurant)
router.put('/:id',authenticate,updateRestaurant)
router.delete('/:id',authenticate,deleteRestaurant)

module.exports = router