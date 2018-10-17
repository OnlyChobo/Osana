json.set! :comment do
  json.set! @comment.id do
    json.extract! @comment, :task_id, :user_id, :body, :created_at
  end
end
