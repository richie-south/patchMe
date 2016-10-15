class CreateForms < ActiveRecord::Migration
  def change
    create_table :forms do |t|
      t.references :user

      t.string :name, limit: 50, null: false
      t.string :description, limit: 500

      t.integer :nr_of_items, null: false
      t.string :image_name, limit: 50, default: 'default'

      t.datetime :open_time, default: Time.now
      t.datetime :close_time, null: false

      t.timestamps null: false
    end
  end
end
