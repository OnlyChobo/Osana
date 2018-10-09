class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
    p 'test'
    p params[:id]
    p @project
  end

  def index
    @projects = Project.all
  end

  private

  def project_params
    params.require(:project).permit(
      :name,
      :description,
      :team_id
    )
  end
end
