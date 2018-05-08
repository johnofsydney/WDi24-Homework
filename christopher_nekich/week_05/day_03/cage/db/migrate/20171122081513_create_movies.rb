class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :rating
      t.text :country
      t.text :release
      t.text :cover
      t.timestamps
    end
  end
end
