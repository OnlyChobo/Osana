class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render "api/users/show"
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :fname,
      :lname,
      :email,
      :password,
      :role,
      :department,
      :pronoun,
      :about_me,
      :vacation_ind
    )
  end
end

#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  username        :string
#  fname           :string           not null
#  lname           :string           not null
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
