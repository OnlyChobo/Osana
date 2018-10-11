json.set! :users do
  @team.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username
    end
  end
end

json.set! :projects do
  @team.projects.each do |project|
    json.set! project.id do
      json.extract! project, :id, :name, :description, :team_id, :created_at
    end
  end
end
