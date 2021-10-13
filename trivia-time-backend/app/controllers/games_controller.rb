class GamesController < ApplicationController

    def create
        if logged_in?
            category = Category.find_or_create_by(name: params[:category][:name])
            game = Game.new(game_params)
            game.category_id = category.id
            game.user_id = current_user.id

            if game.save
                puts GameSerializer.new(game).to_serialized_json
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

    def update
        game = Game.find_by_id(params[:game][:id])
        if game && game.update(score: params[:game][:score])
            render json: {
                success: "Score updated successfully"
            }
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