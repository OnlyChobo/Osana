class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.references :project, foreign_key: true
      t.integer :order, null:false
      t.string :name
      t.timestamps
    end
  end
end
