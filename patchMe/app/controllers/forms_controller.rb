class UsersController < ApplicationController
  include RailsApiAuth::Authentication
  before_action :authenticate!, only: [:index, :show, :create, :update]

  def index
    user = User.find_by_fb_id(current_login.uid);
    if user.nil?
      render json: { errors: "User not found"}, status: :not_found
    else
      forms = Form.select('*').where(user_id: user.id)
      if forms.nil?
        render json: { errors: "No forms found"}, status: :not_found
      else
        render json: { forms: forms }, status: :success
      end
    end
  end

  def show
    user = User.find_by_fb_id(current_login.uid);
    if user.nil?
      render json: { errors: "User not found"}, status: :not_found
    else
      form = Form.find_by(id: params[:id], user_id: user.id)
      if form.nil?
        render json: { errors: "Form not found"}, status: :not_found
      else
        render json: { form: form }, status: :success
      end
    end
  end

  # TODO: create
  def create

  end

  # TODO: update
  def update

  end

  # TODO: form_by_name_and_id
  def form_by_name_and_id

  end

  private

  def form_params
    json_params = ActionController::Parameters.new(JSON.parse(request.body.read))
    json_params.require(:form).permit() # TODO: add premits
  end
end
