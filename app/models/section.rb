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

class Section < ApplicationRecord
  validates :project_id, :order, presence: true

  belongs_to :project
  has_many :tasks
end
