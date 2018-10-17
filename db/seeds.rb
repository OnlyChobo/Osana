# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(
  email: 'a@b.c',
  fname: 'Danny',
  lname: 'Xu',
  password: 'catcat'
)

user2 = User.create(
  email: 'b@c.d',
  fname: 'Alice',
  lname: 'Yang',
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

favourite1 = Favourite.create(
  user_id: 1,
  project_id: 1
)

favourite1 = Favourite.create(
  user_id: 1,
  project_id: 2
)

section1 = Section.create(
  name: 'section1',
  order: 1,
  project_id: 1
)

section2 = Section.create(
  name: 'Current',
  order: 2,
  project_id: 1
)


task1 = Task.create(
  name: 'aeger erah aehre arh earhearh eh earh ',
  order: 1,
  description: 'something about task 1',
  due_date: nil,
  completed: false,
  section_id: 2
)

task2 = Task.create(
  name: 'ta erhearherah aerh earh earh aerh earh erh earh',
  order: 2,
  description: 'something about task 2',
  due_date: nil,
  completed: true,
  section_id: 2
)

task3 = Task.create(
  name: 'taerhaerhearh erah aetjstyk tdkty earh erh',
  order: 3,
  description: 'something about task 3',
  section_id: 2
)

task4 = Task.create(
  name: 'aeth aeth artj eatjaejae jartjeat hteh aeth eat et t',
  order: 4,
  description: 'something about task 3',
  user_assigned_id: 1,
  user_completed_id: 1,
  section_id: 2
)

task5 = Task.create(
  name: 'aeger erah aehre arh earhearh eh earh ',
  order: 1,
  description: 'something about task 1',
  due_date: nil,
  completed: false,
  section_id: 1
)

task6 = Task.create(
  name: 'ta erhearherah aerh earh earh aerh earh erh earh',
  order: 2,
  description: 'something about task 2',
  due_date: nil,
  completed: true,
  section_id: 1
)

task7 = Task.create(
  name: 'taerhaerhearh erah aetjstyk tdkty earh erh',
  order: 3,
  description: 'something about task 3',
  section_id: 1
)

task8 = Task.create(
  name: 'aeth aeth artj eatjaejae jartjeat hteh aeth eat et t',
  order: 4,
  description: 'something about task 3',
  user_assigned_id: 1,
  user_completed_id: 1,
  section_id: 1
)

task9 = Task.create(
  name: 'aeth aeth artj eatjaejae jartjeat hteh aeth eat et t',
  order: 5,
  description: 'something about task 3',
  user_assigned_id: 1,
  user_completed_id: 1,
  user_created_id: 2,
  user_assigner_id: 1,
  due_date: '2014-12-01',
  section_id: 1
)


comment1 = Comment.create(
  task_id: 1,
  user_id: 1,
  body: 'hello world1'
)

comment2 = Comment.create(
  task_id: 1,
  user_id: 2,
  body: 'hello world2'
)

comment3 = Comment.create(
  task_id: 1,
  user_id: 1,
  body: 'hello world3'
)
