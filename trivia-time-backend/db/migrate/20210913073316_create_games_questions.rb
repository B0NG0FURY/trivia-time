class CreateGamesQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :games_questions, id: false do |t|
      t.belongs_to :game
      t.belongs_to :question

      t.timestamps
    end
  end
end
