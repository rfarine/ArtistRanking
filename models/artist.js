var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
  artistId: { type: String, unique: true, index: true },
  name: String,
  body: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  reports: { type: Number, default: 0 },
  random: { type: [Number], index: '2d' },
  voted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Artist', artistSchema);