# == Schema Information
#
# Table name: users
#
#  id           :bigint(8)        not null, primary key
#  email        :string           not null
#  username     :string           not null
#  role         :string
#  department   :string
#  pronoun      :string
#  about_me     :text
#  vacation_ind :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class User < ApplicationRecord
  validates :email, :username, presence: true

  has_many :comments
  has_many :favourites
  has_many :likes
  has_many :passwords
  has_many :sessions
  has_many :team_memberships

  has_many :teams,
  through: :team_memberships,
  source: :team

  has_many :assigned_tasks,
  foreign_key: :user_assigned,
  class_name: :Task

  has_many :completed_tasks,
  foreign_key: :user_completed,
  class_name: :Task
end
