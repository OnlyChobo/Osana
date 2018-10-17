json.set! :task do
  json.set! @task.id do
    json.extract! @task,
      :id, :name, :order, :description, :user_assigned_id, :user_completed_id,
      :due_date, :completed, :section_id
  end
end

json.set! :comments do
  @task.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :user_id, :task_id, :body, :created_at
    end
  end
end
