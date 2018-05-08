class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.text :name
      t.text :author
      t.text :genre
      t.text :image
      t.timestamps
    end
  end
end
