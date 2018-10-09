# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  username        :string           not null
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

class User < ApplicationRecord
  validates :email, :username, :bcrypt_password, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  attr_reader :password

  has_many :comments
  has_many :favourites
  has_many :likes
  has_many :team_memberships

  has_many :teams,
  through: :team_memberships,
  source: :team

  has_many :projects,
  through: :teams,
  source: :projects

  has_many :assigned_tasks,
  foreign_key: :user_assigned,
  class_name: :Task

  has_many :completed_tasks,
  foreign_key: :user_completed,
  class_name: :Task

  after_initialize :ensure_session_token

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.bcrypt_password = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.bcrypt_password).is_password?(password)
  end


end
