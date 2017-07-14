class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      sign_in(@user)
      render :new
    else
      flash.now[:errors] = "invalid credentials"
      render :new
    end
  end

  def destroy
    sign_out
    render :new
  end

end
