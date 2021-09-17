class UserSerializer
    def initialize(user)
        @user = user
    end

    def to_serialized_json
        @user.to_json(except: [:password_digest, :created_at, :updated_at])
    end
end