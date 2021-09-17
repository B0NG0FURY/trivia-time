class User < ApplicationRecord
    has_many :games
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
end
