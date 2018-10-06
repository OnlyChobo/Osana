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

class Task < ApplicationRecord
  validates :name, :order, :section_id, presence: true

  belongs_to :section
  has_many :comments

  belongs_to :user_assigned,
  foreign_key: :user_assigned,
  class_name: :User,
  optional: true

  belongs_to :user_completed,
  foreign_key: :user_completed,
  class_name: :User,
  optional: true
end
