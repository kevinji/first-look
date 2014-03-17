(function($) {
	// Grab matches from Glacier Peak regional
	var year = 2014,
		eventCode = "wasno";

	tba.event.matches(eventCode, year, function(eventData) {
		$("#js-tba").html("<span class='code'>" + JSON.stringify(eventData) + "</span>");
	});
}(jQuery));
