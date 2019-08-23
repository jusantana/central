class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.references :department, null: false, foreign_key: true
      t.string :action
      t.integer :priority

      t.timestamps
    end
  end
end
