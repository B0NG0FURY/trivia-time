class GameSerializer

    def initialize(game)
        @game = game
    end

    def to_serialized_json
        @game.to_json(include: {
            questions: {only: [:text, :correct_answer, :incorrect_answers]},
            category: {only: [:name]}
        }, except: [:user_id, :category_id, :created_at, :updated_at])
    end

end