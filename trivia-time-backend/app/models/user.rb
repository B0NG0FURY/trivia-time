class User < ApplicationRecord
    has_many :games
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true

    def games_played
        self.games.length
    end

    def fav_category
        games = self.games.map {|game| self.games.filter {|filter| filter.category.name === game.category.name}}
        sorted = games.sort_by {|games| games.length}.reverse
        sorted[0][0].category.name
    end

    def fav_difficulty
        games = self.games.map {|game| self.games.filter {|filter| filter.difficulty === game.difficulty}}
        sorted = games.sort_by {|games| games.length}.reverse
        sorted[0][0].difficulty
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
