# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  task_id    :bigint(8)
#  body       :text             not null
#  user_id    :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :task_id, :body, :user_id, presence: true

  belongs_to :task
  belongs_to :user
  has_many :likes
end
