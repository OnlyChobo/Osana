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

class Like < ApplicationRecord
  validates :user_id, :comment_id, presence: true

  belongs_to :user
  belongs_to :comment
end
