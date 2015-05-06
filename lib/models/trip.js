'use strict';

var Mongoose = require('mongoose');

var tripSchema = Mongoose.Schema({
  // dest: {type: String},
  userId: {type: Mongoose.Schema.ObjectId, ref: 'User', required: true},
  createdAt : {type: Date, required: true, default: Date.now},
  name : {type: String, required: true},
  depart : {type: Date, required: true},
  stops: [{
    name: String,
    lat: Number,
    lng: Number
  }]
});

var Trip = Mongoose.model('Trip', tripSchema);
module.exports = Trip;
