# == Schema Information
#
# Table name: team_memberships
#
#  id         :bigint(8)        not null, primary key
#  team_id    :bigint(8)
#  user_id    :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TeamMembership < ApplicationRecord
  validates :team_id, :user_id, presence: true

  belongs_to :team
  belongs_to :user
end
