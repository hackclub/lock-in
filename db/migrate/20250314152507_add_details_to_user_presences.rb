class AddDetailsToUserPresences < ActiveRecord::Migration[7.1]
  def change
    add_column :user_presences, :description, :string
    add_column :user_presences, :project, :string
    add_column :rooms, :started_at, :datetime
  end
end
