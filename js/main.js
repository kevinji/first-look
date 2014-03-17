(function($) {
	// Grab matches from Glacier Peak regional
	var ALLIANCE_SIZE = 3,
		year = 2014,
		eventCode = "wasno",
		teamNum = 488,
		teamKey = "frc" + teamNum;

	tba.event.matches(eventCode, year, function(matches) {
		// Separate between blue and red alliances, as score per match is stored
		// with the alliance
		var blueTeamMatches = _.filter(matches, function(match) {
				return _.contains(match.alliances.blue.teams, teamKey);
			}),
			blueScoreSum = _.reduce(blueTeamMatches, function(sum, match) {
				return sum + match.alliances.blue.score;
			}, 0),
			blueScoreCount = blueTeamMatches.length,

			redTeamMatches = _.filter(matches, function(match) {
				return _.contains(match.alliances.red.teams, teamKey);
			}),
			redScoreSum = _.reduce(redTeamMatches, function(sum, match) {
				return sum + match.alliances.red.score;
			}, 0),
			redScoreCount = redTeamMatches.length,

			totalScore = blueScoreSum + redScoreSum,
			totalCount = blueScoreCount + redScoreCount,

			averageScore = totalScore / totalCount / ALLIANCE_SIZE;

		$(function() {
			$("#js-tba").html("Team " + teamNum + " contributed approximately " + averageScore + " points per match.");
		});
	});
}(jQuery));
