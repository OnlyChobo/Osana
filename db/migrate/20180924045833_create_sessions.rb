class CreateSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :sessions do |t|
      t.string :session_token, null:false
      t.references :user, foreign_key: true
      t.datetime :expires_at, null:false
      t.boolean :expired, default: false

      t.timestamps
    end
  end
end
