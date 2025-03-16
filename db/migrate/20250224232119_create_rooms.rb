class CreateRooms < ActiveRecord::Migration[7.1]
  def change
    create_table :rooms do |t|
      t.integer :max_users

      t.timestamps
    end
  end
end
