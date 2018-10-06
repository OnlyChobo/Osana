# == Schema Information
#
# Table name: favourites
#
#  id         :bigint(8)        not null, primary key
#  user_id    :bigint(8)
#  project_id :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favourite < ApplicationRecord
  validates :user_id, :project_id, presence: true
  belongs_to :user
  belongs_to :project
end
