class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :new #somthing else i'm sure
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new #somthing didfrent
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
