@team_memberships.each do |team_membership|
  json.set! team_membership.id do
    json.extract! team_membership, :id, :user_id, :team_id
  end
end
