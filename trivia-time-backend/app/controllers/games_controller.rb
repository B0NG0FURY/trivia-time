class GamesController < ApplicationController

    def create
        if logged_in?
            category = Category.find_or_create_by(name: params[:category][:name])
            game = Game.new(game_params)
            game.category_id = category.id
            game.user_id = current_user.id

            if game.save
                render json: GameSerializer.new(game).to_serialized_json
            else
                render json: {
                    errors: game.errors.full_messages
                }
            end
        else
            render json: {
                errors: "Log in or sign up to start playing"
            }
        end
    end

    private

    def game_params
        params.require(:game).permit(:difficulty, :user_id, :score, questions_attributes: [:text, :correct_answer, :incorrect_answers])
    end

end