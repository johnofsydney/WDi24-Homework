class AddCategoryIdToFonts < ActiveRecord::Migration[5.1]
  def change
    add_column :fonts, :category_id, :integer
  end
end
