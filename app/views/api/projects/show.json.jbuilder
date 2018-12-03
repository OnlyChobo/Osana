json.set! :projects do
  json.extract! @project, :id, :name, :description, :team_id, :created_at
end