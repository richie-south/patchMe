class UsersController < ApplicationController
  include RailsApiAuth::Authentication
  before_action :authenticate!

  def index
    users = User.all
    render json: { fbUser: current_login, users: users }, status: 200
  end

  def show
    user = User.find_by_fb_id(current_login.uid)
    if user.nil?
      render json: { errors: "User not found"}, status: :not_found
    else
      render json: { fbUser: current_login, user: user }, status: 200
    end
  end

  def create
    if User.where(fb_id: current_login.uid).present?
      render json: { errors: "User already exsists" }, status: :conflict
    else
      user = User.new(fb_id: current_login.uid)
      if user.save
        render json: { fbUser: current_login, user: user}
      else
        render json: { errors: user.errors.messages }, status: :bad_request
      end
    end
  end

end
