class GamesController < ApplicationController

    def create
    end

    private

    def game_params
        params.require(:game).permit(:difficulty, :user_id, questions_attributes: [:text, :correct_answer, :incorrect_answers])
    end

end