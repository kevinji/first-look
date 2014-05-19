'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Event schema
 */
var eventSchema = new Schema({
  name: String,
  nickname: String,
  year: Number,
  location: String,
  website: String
});

/**
 * Validations
 */
eventSchema.path('year').validate(function(year) {
  return year >= 1997;
}, 'Event cannot have started before 1997');

/**
 * Static methods
 */
eventSchema.statics.findByFullName = function(name, callback) {
  this.findOne({ name: name }, callback);
};

eventSchema.statics.findByName = function(name, callback) {
  this.findOne({ nickname: name }, callback);
};

mongoose.model('Event', eventSchema);
