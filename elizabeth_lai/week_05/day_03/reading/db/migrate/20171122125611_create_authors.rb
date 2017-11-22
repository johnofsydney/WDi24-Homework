class CreateAuthors < ActiveRecord::Migration[5.1]
  def change
    create_table :authors do |t|
      t.text :first_name
      t.text :last_name
      t.text :hometown
      t.date :dob
    end
  end
end
