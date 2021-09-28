class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            token = encode_token(user_id: user.id)
            render json: {
                jwt: token,
                logged_in: true,
                user: {
                    username: user.username,
                    id: user.id
                }
            }, status: :accepted
        else
            render json: {
                error: ["Invalid username or password"]
            }, status: :unauthorized
        end
    end

    def delete
        session.delete(:user_id)
        puts session[:user_id]
        if !session[:user_id]
            render json: {
                logged_in: false,
                status: "successfully logged out"
            }
        else
            render json: {
                error: "could not logout"
            }
        end
    end

end