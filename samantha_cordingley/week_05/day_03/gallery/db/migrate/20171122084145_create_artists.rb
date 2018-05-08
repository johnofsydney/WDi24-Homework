class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.text :image
      t.text :dob
      t.text :instagram
      t.timestamps
    end
  end
end
