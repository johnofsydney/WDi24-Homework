# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Actor.create :name => "Nicolas Cage", :nationality => "American", :dob => "7 January 1964", :image => "https://yt3.ggpht.com/-yc_uBOa-1DA/AAAAAAAAAAI/AAAAAAAAAAA/q39gHGVTUJs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"

Actor.create :name => "Others"

Movie.create :title => "Fight Club", :country => "USA"
