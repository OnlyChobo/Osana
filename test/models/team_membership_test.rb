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

require 'test_helper'

class TeamMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
