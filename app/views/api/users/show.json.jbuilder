json.set! :users do
  json.set! @user.id do
    json.extract! @user, :id, :email, :fname, :lname, :username, :role, :department, :pronoun, :about_me, :vacation_ind
  end
end
json.set! :team_memberships do
  @user.team_memberships.each do |team_membership|
    json.set! team_membership.id do
      json.extract! team_membership, :id, :user_id, :team_id
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

json.set! :favourites do
  @user.favourites.each do |favourite|
    json.set! favourite.id do
      json.extract! favourite, :id, :user_id, :project_id
    end
  end
end
