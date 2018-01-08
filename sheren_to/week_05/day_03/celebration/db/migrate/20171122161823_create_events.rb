class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.text :name
      t.text :days
      t.text :image
      t.timestamp
    end
  end
end
