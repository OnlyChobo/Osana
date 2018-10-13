class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name, null:false
      t.integer :order, null:false
      t.text :description
      t.integer :user_assigned_id
      t.integer :user_completed_id
      t.date :due_date
      t.boolean :completed, default: false
      t.references :section, foreign_key: true

      t.timestamps
    end
    add_index :tasks, :user_assigned_id
    add_index :tasks, :user_completed_id
  end
end
