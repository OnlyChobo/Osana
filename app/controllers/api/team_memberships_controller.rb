class Api::TeamMembershipsController < ApplicationController
  def create
    @team_membership = TeamMembership.new(team_membership_params)
    if @team_membership.save
      render :show
    else
      render json: @team_membership.errors.full_messages, status: 422
    end
  end

  def update
    @team_membership = TeamMembership.new(team_membership_params)
    if @team_membership
      if @team_membership.save
        render :show
      else
        render json: ['error'], status: 422
      end
    else
      render json: @team_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @team_membership = TeamMembership.find(params[:id])
    @team_membership.destroy
    @team_membership
  end

  def show
    @team_membership = TeamMembership.find(params[:id])
  end

  def index
    @team_memberships = TeamMembership.all
  end


  private

  def team_membership_params
    params.require(:team_membership).permit(
      :user_id,
      :team_id
    )
  end
end
