class Api::TeamsController < ApplicationController
  def show
    @team = Team.includes(:team_memberships).find(params[:id])
  end

end
