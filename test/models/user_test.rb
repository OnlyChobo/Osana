# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  username        :string
#  fname           :string           not null
#  lname           :string           not null
#  bcrypt_password :string           not null
#  session_token   :string           not null
#  role            :string
#  department      :string
#  pronoun         :string
#  about_me        :text
#  vacation_ind    :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
