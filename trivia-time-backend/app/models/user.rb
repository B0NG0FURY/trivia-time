class User < ApplicationRecord
    has_many :games
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true

    def games_played
        self.games.length
    end

    def fav_category
        
    end

    def questions_answered
        total = 0;
        self.games.map {|game| total += game.questions.length}
        total
    end

    def avg_correct
        scores = self.games.map {|game| game.score}.compact
        average = (scores.sum.to_f / self.questions_answered.to_f) * 100
        average.round.to_i
    end
end
