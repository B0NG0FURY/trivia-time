class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.save
            render json: {
                logged_in: true,
                user: {
                    username: user.username,
                    id: user.id
                }
            }, status: :created
        else
            render json: {
                errors: user.errors.full_messages
            }, status: :unprocessable
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end

end