class Api::FavouritesController < ApplicationController
  def create
    @favourite = Favourite.new(favourite_params)
    if @favourite.save
      render :show
    else
      render json: @favourite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favourite = Favourite.find(params[:id])
    @favourite.destroy
    render json: @favourite
  end

  private

  def favourite_params
    params.require(:favourite).permit(
      :user_id,
      :project_id
    )
  end
end
