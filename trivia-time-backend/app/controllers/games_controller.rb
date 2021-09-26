class GamesController < ApplicationController

    def create
        if logged_in?
            category = Category.find_or_create_by(name: params[:category][:name])
            game = Game.new(game_params)
            game.category_id = category.id
            game.user_id = session[:user_id]
        end
        if game.save
            render json: GameSerializer.new(game).to_serialized_json
        else
            render json: {
                errors: game.errors.full_messages
            }
        end
    end

    private

    def game_params
        params.require(:game).permit(:difficulty, :user_id, :score, questions_attributes: [:text, :correct_answer, :incorrect_answers])
    end

end