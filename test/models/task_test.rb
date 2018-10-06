# == Schema Information
#
# Table name: tasks
#
#  id             :bigint(8)        not null, primary key
#  name           :string           not null
#  order          :integer          not null
#  description    :text
#  user_assigned  :integer
#  user_completed :integer
#  due_date       :date
#  completed      :boolean          default(FALSE)
#  section_id     :bigint(8)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
