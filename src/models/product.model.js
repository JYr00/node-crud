const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, enum: ['S', 'M', 'L']},
  unitSize : { type: Number},
  description: String,
  category: { type: String, default: 'No asignado' }
});

ProductSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;