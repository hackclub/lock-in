class AddDeletedAt < ActiveRecord::Migration[7.1]
  def change
    # User
    add_column :users, :deleted_at, :datetime
    add_index :users, :deleted_at

    # User presence
    add_column :user_presences, :deleted_at, :datetime
    add_index :user_presences, :deleted_at

    # Rooms
    add_column :rooms, :deleted_at, :datetime
    add_index :rooms, :deleted_at
  end
end
