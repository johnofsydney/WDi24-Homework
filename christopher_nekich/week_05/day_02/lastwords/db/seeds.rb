# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Word.create :name => "Frank Sinatra", :quote => "I'm losing it.", :description => "Francis Albert Sinatra was an American singer, actor, and producer who was one of the most popular and influential musical artists of the 20th century.",
:died_from => "Heart Attack", :died => "May 14 1998", :death_age => 82

Word.create :name => "Nostradamus", :quote => "Tomorrow, at sunrise, I shall no longer be here.", :description => "Michel de Nostredame, usually Latinised as Nostradamus, was a French physician and reputed seer who published collections of prophecies that have since become widely famous.",
:died_from => "Gout", :died => "2 July 1566", :death_age => 62

Word.create :name => "Richard Feynman", :quote => "This dying is boring.", :description => "Richard Feynman was an American theoretical physicist known for his work in the path integral formulation of quantum mechanics, the theory of quantum electrodynamics, and the physics of the superfluidity of supercooled liquid helium, as well as in particle physics for which he proposed the parton model. For his contributions to the development of quantum electrodynamics, Feynman, jointly with Julian Schwinger and Shin'ichirō Tomonaga, received the Nobel Prize in Physics in 1965.", :died_from => "Kidney Failure", :died => "February 15, 1988", :death_age => 69
