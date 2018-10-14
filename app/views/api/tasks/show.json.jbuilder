json.set! :comments do
  @task.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :user_id, :task_id, :body, :created_at
    end
  end
end
