class Api::TournamentsController < ApplicationController
  
  def index
  	tournaments = Tournament.all
  	render json: tournaments
  end

  def create
  	tournament = Tournament.create tournament_params
  	render json: tournament, status: 201
  end

  def destroy
    tournament = Tournament.find_by(id: params[:id])
    unless tournament
      render json: {error: "tournament not found"}, status: 400
    end
    tournament.destroy
    tournaments = Tournament.all
    render json: tournaments, status: 200
  end

  private

  def tournament_params
  	params.require(:tournament).permit(:name)
  end

end