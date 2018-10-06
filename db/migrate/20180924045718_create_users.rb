class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null:false
      t.string :username, null:false
      t.string :role
      t.string :department
      t.string :pronoun
      t.text :about_me
      t.boolean :vacation_ind

      t.timestamps
    end
  end
end
