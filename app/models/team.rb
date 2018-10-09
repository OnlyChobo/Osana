# == Schema Information
#
# Table name: teams
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, presence: true

  has_many :projects,
  foreign_key: :team_id,
  class_name: :Project

  has_many :team_memberships

  has_many :members,
  through: :team_memberships,
  source: :user

end
