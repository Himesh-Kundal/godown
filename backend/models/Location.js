const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', default: null }
});

module.exports = mongoose.model('Location', locationSchema);
