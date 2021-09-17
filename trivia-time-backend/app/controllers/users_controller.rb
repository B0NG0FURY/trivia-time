class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.save
            session[:user_id] = user.id
            puts session[:user_id]
            render json: {
                status: :created,
                user: UserSerializer.new(user).to_serialized_json
            }
        else
            render json: {
                status: 500,
                errors: user.errors.full_messages
            }
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end

end