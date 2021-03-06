class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null:false
      t.string :username
      t.string :fname, null:false
      t.string :lname, null:false
      t.string :bcrypt_password, null:false
      t.string :session_token, null:false
      t.string :role
      t.string :department
      t.string :pronoun
      t.text :about_me
      t.boolean :vacation_ind
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
