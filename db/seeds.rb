# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.create(
  email: 'demo@demo.com',
  fname: 'Demo',
  lname: 'Demo',
  password: 'catcat'
)

10.times do
  firstname = Faker::Name.first_name
  lastname = Faker::Name.last_name
  User.create(
    fname: firstname,
    lname: lastname,
    email: firstname+"@"+lastname+".com",
    password: 'catcat',
    role: Faker::Job.position,
    department: Faker::Job.field
  )
end

10.times do
  Team.create(
    name: Faker::Music.band
  )
end

User.all.each do |user|
  Team.all.each do |team|
    if rand > 0.5
      TeamMembership.create(
        user_id: user.id,
        team_id: team.id
      )
    end
  end
end

20.times do
  Project.create(
    name: "Become " + Faker::HarryPotter.character,
    description: Faker::HarryPotter.quote,
    team_id: rand(9)+1
  )
end


User.all.each do |user|
  Project.all.each do |project|
    if rand > 0.8
      Favourite.create(
        user_id: user.id,
        project_id: project.id
      )
    end
  end
end

(1..40).each do |ord|
  Section.create(
    name: Faker::HarryPotter.location,
    order: ord,
    project_id: rand(19)+1
  )
end

(1..120).each do |ord|
  Task.create(
    name: Faker::HarryPotter.spell,
    order: ord,
    description: Faker::MichaelScott.quote,
    completed: false,
    section_id: rand(39)+1
  )
end
