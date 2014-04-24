'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Team schema
 */
var teamSchema = new Schema({
  name: String,
  nickname: String,
  number: Number,
  website: String,
  location: String,
  foundingYear: Number
});

/**
 * Validations
 */
teamSchema.path('number').validate(function(number) {
  return number > 0;
}, 'Team number must be positive');

teamSchema.path('foundingYear').validate(function(foundingYear) {
  return foundingYear >= 1997;
}, 'Team cannot be founded before 1997');

/**
 * Static methods
 */
teamSchema.statics.findByNumber = function(number, callback) {
  this.find({ number: number }, callback);
};

mongoose.model('Team', teamSchema);
