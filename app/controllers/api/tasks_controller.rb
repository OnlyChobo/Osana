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
    @tasks = Task.all
  end

  private

  def task_params
    params.require(:task).permit(
      :name,
      :order,
      :description,
      :user_assigned,
      :user_completed,
      :due_date,
      :completed,
      :section_id
    )
  end
end
