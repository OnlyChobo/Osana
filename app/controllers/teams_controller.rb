class TeamsController < ApplicationController
  def show
    render json: Team.find(params[:id])
  end

  def create
    @team = Team.new(todo_params)
    if @team.save
      render json: @team
    else
      render json: @team.errors.full_messages, status: 422
    end
  end
end
