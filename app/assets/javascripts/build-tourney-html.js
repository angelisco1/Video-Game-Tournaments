function buildTourneyHtml (tournament) {
  return '\
    <li>\
      <a href="/tournaments/' + tournament.id + '">' + tournament.name + '</a>\
      <button class="btn btn-success delete-button" data-hook="tourney-delete" type="submit" name="tournament" value="' + tournament.id + '">Delete</button>\
    </li>\
  '
}
