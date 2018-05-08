class CreateActors < ActiveRecord::Migration[5.1]
  def change
    create_table :actors do |t|
      t.text :name
      t.text :nationality
      t.text :dob
      t.text :image
      t.timestamps
    end
  end
end
