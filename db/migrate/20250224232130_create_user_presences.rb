class CreateUserPresences < ActiveRecord::Migration[7.1]
  def change
    create_table :user_presences do |t|
      t.references :user, null: false, foreign_key: true
      t.references :room, null: false, foreign_key: true
      t.uuid :peer_id

      t.timestamps
    end
  end
end
