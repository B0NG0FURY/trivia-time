class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            puts session[:user_id]
            render json: {
                logged_in: true,
                user: user
            }
        else
            render json: {
                status: 401,
                error: ["username or password is incorrect"]
            }
        end
    end

    def destroy
        session.delete(:user_id)
        puts session[:user_id]
    end

end