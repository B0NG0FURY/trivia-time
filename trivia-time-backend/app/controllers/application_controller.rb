class ApplicationController < ActionController::API
    before_action :authorized
   
    def jwt_key
        ENV['SESSION_SECRET']
    end

    def encode_token(payload)
        JWT.encode(payload, jwt_key)
    end

    def auth_header
        request.headers['Authorization']
    end

    def decode_token
        if auth_header
            token = auth_header.split(" ")[1]
            begin
                JWT.decode(token, jwt_key)[0]
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def current_user
        if decode_token
            user_id = decode_token['user_id']
            @user = User.find_by_id(user_id)
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end

end
