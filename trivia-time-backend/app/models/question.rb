class Question < ApplicationRecord
    has_and_belongs_to_many :games

    def all_answers
        answers = self.incorrect_answers.map {|answer| answer}
        answers.insert(rand(0..3), self.correct_answer)
    end
end
