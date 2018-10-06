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

class Session < ApplicationRecord
  validates :session_token, :user_id, :expires_at, presence: true
  
  belongs_to :user
end
