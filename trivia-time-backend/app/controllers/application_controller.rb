class ApplicationController < ActionController::API
    helper_method :logged_in?

    def logged_in?
        !!session[:user_id]
    end

end
