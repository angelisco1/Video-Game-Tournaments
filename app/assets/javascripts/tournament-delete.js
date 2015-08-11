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
	    location.reload();
	}

}