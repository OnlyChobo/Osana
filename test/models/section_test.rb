# == Schema Information
#
# Table name: sections
#
#  id         :bigint(8)        not null, primary key
#  project_id :bigint(8)
#  order      :integer          not null
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SectionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
