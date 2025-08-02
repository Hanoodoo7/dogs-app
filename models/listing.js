const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  age: Number,  // Add age attribute
  image: {
    url: { type: String, required: true },
    cloudinary_id: { type: String, required: true }
  },
  seller: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  comments: [{
    content: String,
    author: { 
      type: Schema.Types.ObjectId, 
      ref: 'User' 
    }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);