class UsersController < ApplicationController
  before_action :set_user, only: [:show,:update,:destroy]

def check_user
  @user = User.find_by(username: params[:user][:username])
  if @user
    render json: @user
  else
    render json: {message:"Invalid"}
  end
end

def index
  users = User.all
  render json: users, status: 200
end

def create
  user = User.new(user_params)
  if user.valid?
    user.save
    render json: user, status: 201
  else
    render json: { errors: user.errors.full_messages }, status: 422
  end
end


def update
  @user.update(user_params)
  render json: @user, status: 200
end

def destroy
  userId = @user.id
  @user.destroy
  render json: {message:"Zap! user deleted", userId:userId}
end

def show
  render json: @user, status: 200
end

private
def user_params
  params.permit(:username, :email)
end

def set_user
  @user = User.find(params[:id])
end

end
