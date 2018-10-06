# == Schema Information
#
# Table name: passwords
#
#  id              :bigint(8)        not null, primary key
#  user_id         :bigint(8)
#  bcrypt_password :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class PasswordTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
