class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    p @task
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    if @task.update_attributes(task_params)
      render :show
    end
  end

  def index
    if task_params.empty?
      @tasks = Task.all
    else
      @tasks = Task.where(task_params)
    end
  end

  private

  def task_params
    params.require(:task).permit(
      :name,
      :order,
      :description,
      :user_assigned_id,
      :user_completed_id,
      :user_assigner_id,
      :user_created_id,
      :due_date,
      :completed,
      :section_id
    )
  end
end
