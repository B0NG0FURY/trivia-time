class StatsSerializer
    def initialize(user)
        @user = user
    end

    def to_serialized_json
        @user.to_json(methods: [:games_played, :fav_category, :fav_difficulty, :questions_answered, :avg_correct], except: [:id, :username, :password_digest, :created_at, :updated_at])
    end
end