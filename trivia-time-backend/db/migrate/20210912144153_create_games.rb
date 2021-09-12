class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :difficulty
      t.integer :score
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
