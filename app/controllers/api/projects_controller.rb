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

  end

  def index
    if params[:project][:starts_with]
      @projects = Project.where("name LIKE :prefix", "#{prefix}%")
    elsif project_params.empty?
      @projects = Project.all
    else
      @projects = Project.where(project_params)
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render json: @project
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
