# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Director.destroy_all
Director.create(:name => 'Yorgos Lanthimos', :nationality => 'Greek', :image => 'https://i.kinja-img.com/gawker-media/image/upload/s--2JCY3Shq--/c_scale,fl_progressive,q_80,w_800/kiofe31xbdwzwutanqoc.jpg')

Film.destroy_all
Film.create(:title => 'The Lobster', :year => '2015', :image => 'https://photos.vanityfair.com/2015/05/15/5555fc9e1aaec7043ea4aa08_cannes-film-festival-2015-the-lobster-colin-farrell.jpg')
