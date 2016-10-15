class UsersController < ApplicationController
  include RailsApiAuth::Authentication
  before_action :authenticate!

  def show
    user = User.find_by_fb_id(current_login.uid)
    if user.nil?
      render json: { errors: "User not found"}, status: :not_found
    else
      render json: { fbUser: current_login, user: user }, status: :success
    end
  end

  def create
    if User.where(fb_id: current_login.uid).present?
      render json: { errors: "User already exsists" }, status: :conflict
    else
      user = User.new(fb_id: current_login.uid)
      if user.save
        render json: { success: true, fbUser: current_login, user: user}
      else
        render json: { errors: user.errors.messages }, status: :bad_request
      end
    end
  end

end
