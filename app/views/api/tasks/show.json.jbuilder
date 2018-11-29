json.set! :task do
  json.set! @task.id do
    json.partial! 'api/tasks/task.json.jbuilder', task: @task
  end
end

# json.set! :comments do
#   @task.comments.each do |comment|
#     json.set! comment.id do
#       json.extract! comment, :id, :user_id, :task_id, :body, :created_at
#     end
#   end
# end
