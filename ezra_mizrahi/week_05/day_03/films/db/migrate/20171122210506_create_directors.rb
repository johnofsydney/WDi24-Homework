class CreateDirectors < ActiveRecord::Migration[5.1]
  def change
    create_table :directors do |t|
      t.text :name
      t.text :nationality
      t.text :image
      t.timestamps
    end
  end
end
