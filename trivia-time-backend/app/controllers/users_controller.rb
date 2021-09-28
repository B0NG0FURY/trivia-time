class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        @user = User.create(user_params)
        if @user.save
            @token = encode_token(user_id: @user_id)
            render json: {
                jwt: @token,
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