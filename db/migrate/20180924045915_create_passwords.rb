class CreatePasswords < ActiveRecord::Migration[5.2]
  def change
    create_table :passwords do |t|
      t.references :user, foreign_key: true
      t.string :bcrypt_password, null:false

      t.timestamps
    end
  end
end
