class Api::SectionsController < ApplicationController
  def create
    @section = Section.new(section_params)
    if @section.save
      render :show
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  def show
    @section = Section.find(params[:id])
  end

  def index
    if section_params.empty?
      @sections = Section.all
    else
      @sections = Section.where(section_params)
    end
  end

  private
  def section_params
    params.require(:section).permit(:name, :order, :project_id)
  end
end
