class CreateUserSchedules < ActiveRecord::Migration[7.1]
  def change
    create_table :user_schedules do |t|
      t.references :user, null: false, foreign_key: true
      t.timestamp :start
      t.timestamp :finish

      t.timestamps
    end
  end
end
