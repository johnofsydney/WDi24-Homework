class CreateFonts < ActiveRecord::Migration[5.1]
  def change
    create_table :fonts do |t|
      t.text :name
      t.text :classification
      t.text :designer
      t.integer :year_created
      t.text :image
    end
  end
end
