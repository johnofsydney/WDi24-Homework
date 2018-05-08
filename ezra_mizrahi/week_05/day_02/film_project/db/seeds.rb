# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Film.destroy_all

Film.create :title => 'Gewalt! Gewalt: shojo geba geba', :year => 1969, :director => 'Koji Wakamatsu', :synopsis => 'Hipsters kidnap a young couple', :language => 'Japanese', :genre => 'Pinku'
Film.create :title => 'The Killing of a Sacred Deer', :year => 2017, :director => 'Yorgos Lanthimos', :synopsis => 'Weird stuff happens', :language => 'English', :genre => 'drama'
Film.create :title => 'Boiling Point', :year => 1990, :director => 'Takeshi Kitano', :synopsis => 'Yakuza and baseball players', :language => 'Japanese', :genre => 'action'
Film.create :title => 'Under the Shadow', :year => 2016, :director => 'Babak Anvari', :synopsis => 'Mysterious evil and Iran-Iraq war', :language => 'Farsi', :genre => 'horror'
