class CreateUserPrefs < ActiveRecord::Migration[7.1]
  def change
    create_table :user_prefs do |t|
      t.references :user, null: false, foreign_key: true
      t.boolean "had_room_tour", default: false, null: false

      t.timestamps
    end
  end
end
