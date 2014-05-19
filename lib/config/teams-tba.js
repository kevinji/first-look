'use strict';

var mongoose = require('mongoose'),
    Team = mongoose.model('Team'),
    tba = require('../background/the-blue-alliance.js');

var addTeamToDB = function(data) {
  Team.create({
    name: data.name,
    nickname: data.nickname,
    number: data.team_number,
    website: data.website,
    location: data.location,
    foundingYear: 2014, // Fake year
    description: '' // Empty description
  }, function() {
    console.log('Team ' + data.team_number + ' added to the database.');
  });
};

tba.team(1899, 2014, addTeamToDB);
