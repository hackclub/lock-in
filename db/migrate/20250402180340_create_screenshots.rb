class CreateScreenshots < ActiveRecord::Migration[7.1]
  def change
    create_table :screenshots do |t|
      t.references :user, null: false, foreign_key: true
      t.string :data_url

      t.timestamps
    end
  end
end
