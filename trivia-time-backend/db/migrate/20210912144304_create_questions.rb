class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :text
      t.string :correct_answer
      t.string :incorrect_answers

      t.timestamps
    end
  end
end
