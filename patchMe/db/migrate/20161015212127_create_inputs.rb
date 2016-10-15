class CreateInputs < ActiveRecord::Migration
  def change
    create_table :inputs do |t|
      t.references :form

      t.string :value, limit: 500, null: false
      t.string :description, limit: 250, null: false
      t.string :name, limit: 50, null: false

      t.integer :type, in: 1..3, null: false

      t.timestamps null: false
    end
  end
end
