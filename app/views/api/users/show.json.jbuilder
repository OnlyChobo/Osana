json.set! :users do
  json.extract! @user, :id, :username, :email
end
json.set! :projects do
  @user.projects.each do |project|
    json.set! project.id do
      json.extract! project, :id, :name, :description, :team_id
    end
  end
end
json.set! :teams do
  @user.teams.each do |team|
    json.set! team.id do
      json.extract! team, :id, :name
    end
  end
end
