(function($) {
	var API_V2_URI = "http://www.thebluealliance.com/api/v2/",
		tba = {};

	var tbaAjax = function(url, callback) {
		$.ajax({
			url: API_V2_URI + url,
			dataType: "json",
			type: "GET",
			data: {
				"X-TBA-App-Id": "firstwa:video-stream:1"
			}
		}).done(function(data) {
			// Hide the textStatus and the jqXHR from the callback
			callback(data);
		});
	};

	tba.team = function(teamNum, year, callback) {
		var teamKey = "frc" + teamNum,
			url = "team/" + teamKey + "/" + year;

		tbaAjax(url, callback);
	};

	tba.events = function(year, callback) {
		var url = "events/" + year;

		tbaAjax(url, callback);
	};

	tba.event = function(eventCode, year, callback) {
		var eventKey = year + eventCode,
			url = "event/" + eventKey;

		tbaAjax(url, callback);
	};

	tba.event.teams = function(eventCode, year, callback) {
		var eventKey = year + eventCode,
			url = "event/" + eventKey + "/teams";

		tbaAjax(url, callback);
	};

	tba.event.matches = function(eventCode, year, callback) {
		var eventKey = year + eventCode,
			url = "event/" + eventKey + "/matches";

		tbaAjax(url, callback);
	};

	// Expose API to global space
	window.tba = tba;
}(jQuery));
