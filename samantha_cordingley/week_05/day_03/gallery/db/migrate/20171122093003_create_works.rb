class CreateWorks < ActiveRecord::Migration[5.1]
  def change
    create_table :works do |t|
      t.text :title
      t.text :material
      t.text :image
      t.timestamps
    end
  end
end
