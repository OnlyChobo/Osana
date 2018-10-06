# == Schema Information
#
# Table name: sessions
#
#  id            :bigint(8)        not null, primary key
#  session_token :string           not null
#  user_id       :bigint(8)
#  expires_at    :datetime         not null
#  expired       :boolean          default(FALSE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class SessionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
