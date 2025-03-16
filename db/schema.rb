# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_03_14_152507) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "heartbeats", force: :cascade do |t|
    t.string "user_id", null: false
    t.string "branch"
    t.string "category"
    t.string "dependencies", default: [], array: true
    t.string "editor"
    t.string "entity"
    t.string "language"
    t.string "machine"
    t.string "operating_system"
    t.string "project"
    t.string "type"
    t.string "user_agent"
    t.integer "line_additions"
    t.integer "line_deletions"
    t.integer "lineno"
    t.integer "lines"
    t.integer "cursorpos"
    t.integer "project_root_count"
    t.float "time", null: false
    t.boolean "is_write"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "branch", "category", "dependencies", "editor", "entity", "language", "machine", "operating_system", "project", "type", "user_agent", "line_additions", "line_deletions", "lineno", "lines", "cursorpos", "project_root_count", "time", "is_write"], name: "idx_on_user_id_branch_category_dependencies_editor__bfe8fefe9a", unique: true
  end

  create_table "rooms", force: :cascade do |t|
    t.integer "max_users"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.datetime "started_at"
    t.index ["deleted_at"], name: "index_rooms_on_deleted_at"
  end

  create_table "user_prefs", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.boolean "had_room_tour", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_prefs_on_user_id"
  end

  create_table "user_presences", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "room_id", null: false
    t.uuid "peer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.string "description"
    t.string "project"
    t.index ["deleted_at"], name: "index_user_presences_on_deleted_at"
    t.index ["room_id"], name: "index_user_presences_on_room_id"
    t.index ["user_id"], name: "index_user_presences_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "slack_uid", null: false
    t.string "email", null: false
    t.string "username"
    t.string "avatar_url"
    t.boolean "is_admin", default: false, null: false
    t.boolean "uses_slack_status", default: false, null: false
    t.string "slack_scopes", default: [], array: true
    t.text "slack_access_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_users_on_deleted_at"
    t.index ["slack_uid"], name: "index_users_on_slack_uid", unique: true
  end

  add_foreign_key "user_prefs", "users"
  add_foreign_key "user_presences", "rooms"
  add_foreign_key "user_presences", "users"
end
