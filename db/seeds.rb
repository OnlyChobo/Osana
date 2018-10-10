# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(
  email: 'a@b.c',
  username: 'danny',
  password: 'catcat'
)

user2 = User.create(
  email: 'b@c.d',
  username: 'bob',
  password: 'catcat'
)

team1 = Team.create(
  name: 'superteam'
)

team2 = Team.create(
  name: 'Best team'
)

team3 = Team.create(
  name: 'Bad team'
)

team_membership1 = TeamMembership.create(
  user_id: 1,
  team_id: 1
)

team_membership2 = TeamMembership.create(
  user_id: 1,
  team_id: 2
)

team_membership3 = TeamMembership.create(
  user_id: 1,
  team_id: 3
)

team_membership2 = TeamMembership.create(
  user_id: 2,
  team_id: 1
)

favourite1 = Favourite.create(
  user_id: 1,
  project_id: 1
)

favourite1 = Favourite.create(
  user_id: 1,
  project_id: 2
)

project1 = Project.create(
  name: 'project1',
  description: 'it is very important',
  team_id: 1
)

project2 = Project.create(
  name: 'project2',
  description: 'it is somewhat important',
  team_id: 1
)

project3 = Project.create(
  name: 'project3',
  description: 'it is not very important',
  team_id: 1
)



#
# task1 = Task.new(
#   name: 'task1',
#   order: 1,
#   description: 'something about task 1',
#   due_date: nil,
#   completed: false,
#   section_id: 1
# )
#
# task1 = Task.create(
#   name: 'task2',
#   order: 2,
#   description: 'something about task 2',
#   user_assigned: user1,
#   user_completed: user1,
#   due_date: nil,
#   completed: true,
#   section_id: 1
# )
#
# task1 = Task.create(
#   name: 'task3',
#   order: 3,
#   description: 'something about task 3',
#   user_assigned: user1,
#   user_completed: user1,
#   due_date: nil,
#   completed: true,
#   section_id: 1
# )
