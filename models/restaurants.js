const mongoose = require('mongoose');

//restaurant Model
const restaurantSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  location: {
    type: {
      type: String,
      enum: ['Point'], // Geospatial data type
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  ratings: [{ 
    type: Number, 
    min: 1, 
    max: 5 
  }]
});

// Create a geospatial index on the location field
restaurantSchema.index({ location: '2dsphere' });

// Create the Restaurant model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
