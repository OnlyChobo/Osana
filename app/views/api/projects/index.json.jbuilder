@projects.each do |project|
  json.set! project.id do
    json.extract! project, :name, :description, :team_id, :created_at
  end
end
