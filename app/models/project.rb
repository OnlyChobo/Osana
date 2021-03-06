# == Schema Information
#
# Table name: projects
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text             not null
#  team_id     :bigint(8)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
  validates :name, :team_id, presence: true

  belongs_to :team

  has_many :favourites,
  dependent: :destroy

  has_many :sections,
  dependent: :destroy

  has_many :tasks,
  through: :sections,
  source: :tasks,
  dependent: :destroy

  has_many :comments,
  through: :tasks,
  source: :comments,
  dependent: :destroy
end
