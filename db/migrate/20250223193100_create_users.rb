class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string "slack_uid", null: false
      t.string "email", null: false
      t.string "username"
      t.string "avatar_url"
      t.boolean "is_admin", default: false, null: false
      t.boolean "uses_slack_status", default: false, null: false
      t.string "slack_scopes", default: [], array: true
      t.text "slack_access_token"
      t.index ["slack_uid"], name: "index_users_on_slack_uid", unique: true

      t.timestamps
    end
  end
end
