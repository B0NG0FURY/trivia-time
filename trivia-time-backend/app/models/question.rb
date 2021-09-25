class Question < ApplicationRecord
    has_and_belongs_to_many :games
    validates :text, presence: true
    validates :correct_answer, presence: true
end
