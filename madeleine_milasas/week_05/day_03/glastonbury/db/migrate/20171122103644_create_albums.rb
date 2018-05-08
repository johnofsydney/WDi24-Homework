class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.text :name
      t.date :release_date
      t.text :image
      t.timestamps
    end
  end
end
