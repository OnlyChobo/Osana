json.set! :team do
  json.extract! @team, :id
end

json.set! :users do
  @team.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username, :fname, :lname
    end
  end
end