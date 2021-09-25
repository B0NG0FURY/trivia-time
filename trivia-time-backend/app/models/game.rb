class Game < ApplicationRecord
    belongs_to :user
    belongs_to :category
    has_and_belongs_to_many :questions
    accepts_nested_attributes_for :questions
    validates :category, presence: true
    validates :difficulty, presence: true
end
