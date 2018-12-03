json.set! :task do
  json.set! @task.id do
    json.partial! 'api/tasks/task.json.jbuilder', task: @task
  end
end