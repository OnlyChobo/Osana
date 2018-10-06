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

class Password < ApplicationRecord
  validates :bcrypt_password, :user_id, presence: true

  belongs_to :user
end
