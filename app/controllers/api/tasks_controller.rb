class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show
    @task = Task.find(params[:id])
  end

  def index
    p task_params
    @tasks = Task.where(task_params)
  end

  private

  def task_params
    params.require(:task).permit(
      :name,
      :order,
      :description,
      :user_assigned_id,
      :user_completed_id,
      :due_date,
      :completed,
      :section_id
    )
  end
end
