class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        user = User.new(user_params)
        if user.save
            token = encode_token(user_id: user.id)
            render json: {
                jwt: token,
                logged_in: true,
                user: {
                    username: user.username,
                    id: user.id
                }
            }
        else
            render json: {
                errors: user.errors.full_messages
            }
        end
    end

    def stats
        if logged_in?
            user = User.find_by_id(params[:id])
            render json: StatsSerializer.new(user).to_serialized_json
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end

end