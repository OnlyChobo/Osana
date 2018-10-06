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

  has_many :projects
  has_many :team_memberships

  has_many :memebers,
  through: :team_memberships,
  source: :user
end
