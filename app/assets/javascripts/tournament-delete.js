function deleteTournament(event){
	event.preventDefault();
	var tournamentId = this.value;
	// alert("ID: " + tournamentId);

	var request = $.ajax({
      url: '/api/tournaments/' + tournamentId,
      type: 'DELETE',
      data: {id: tournamentId}
    });

    request.fail(showError)
    request.done(showTournaments)

	function showError (error) {
	    console.error('Error deleting a tournament.', '\n' + error.responseText)
	    var message = 'There was a problem deleting the tournament.'
	    $tourneySection.append(buildErrorHtml(message))
	}

	function showTournaments (tournaments) {
	    // location.reload();
	    var html
	    if (tournaments.length === 0) {
	    	html = buildErrorHtml('Looks like there aren\'t any tournaments yet.')
	    } else {
	    	html = buildTourneyListHtml(tournaments)
	    }
	    $('.js-tourney-section').empty();
	    $('.js-tourney-section').append(html);


	}

}