# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  user_id    :bigint(8)
#  comment_id :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
