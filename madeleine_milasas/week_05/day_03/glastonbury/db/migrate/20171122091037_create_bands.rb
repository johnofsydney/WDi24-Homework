class CreateBands < ActiveRecord::Migration[5.1]
  def change
    create_table :bands do |t|
      t.text :name
      t.text :country
      t.text :year
      t.text :members
      t.text :image
      t.timestamps
    end
  end
end
