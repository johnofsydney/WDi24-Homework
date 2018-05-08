require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

# rails will write this code
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# optional
ActiveRecord::Base.logger = Logger.new(STDERR)

# create class of film
# class Film < ActiveRecord::Base
# end

# create class of director
# class Director < ActiveRecord::Base
# end

class Director < ActiveRecord::Base
  has_many :films, dependent: :destroy
end

class Film < ActiveRecord::Base
  belongs_to :director
end

# class CreateFilms < ActiveRecord::Migration
#   def change
#     create_table :directors do |t|
#       t.string :name
#       t.timestamps
#     end
#
#     create_table :films do |t|
#       t.belongs_to :director, index: true
#       t.datetime :published_at
#       t.timestamps
#     end
#   end
# end

get '/' do
  erb :home
end

# index: show all films
get '/films' do
  @films = Film.all # active record
  erb :films_index
end

# new: form to add a new film to the db
get '/films/new' do
  erb :films_new
end

# create: add new film to the db
post '/films' do
  film = Film.new
  film.title = params[:title]
  film.director = params[:director]
  film.genre = params[:genre]
  film.year = params[:year]
  film.language = params[:language]
  film.synopsis = params[:synopsis]
  film.image = params[:image]
  film.save # this creates the new entry
  redirect to("/films/#{film.id}") # this shows the new film you've just created
end

# show info for single film
get '/films/:id' do
  # get this film from the db
  @film = Film.find params[:id]
  erb :films_show
end

# edit: show existing value for film on edit page
get '/films/:id/edit' do
  @film = Film.find params[:id]
  erb :films_edit
end

# update: update existing film with edit info
post '/films/:id' do
  #active record way to do this
  film = Film.find params[:id]
  film.update :title => params[:title], :director => params[:director], :genre => params[:genre], :year => params[:year], :language => params[:language], :synopsis => params[:synopsis], :image => params[:image]
  redirect to("/films/#{params[:id]}")
end

# destroy: delete film with provided id
get '/films/:id/delete' do
  film = Film.find params[:id]
  film.destroy
  redirect to('/films')
end

#### directors ####

# list all directors
get '/directors' do
  @directors = Director.all
  erb :directors_index
end

# form to input new director
get '/directors/new' do
  erb :directors_new
end

post '/directors' do
  director = Director.new
  director.name = params[:name]
  director.nationality = params[:nationality]
  director.biography = params[:biography]
  director.filmography = params[:filmography]
  director.image = params[:image]
  director.save
  redirect to("/directors/#{director.id}") # show the director you just added
end

# show individual director
get '/directors/:id' do
  @director = Director.find params[:id]
  erb :directors_show
end

# form to edit director page
get '/directors/:id/edit' do
  @director = Director.find params[:id]
  erb :directors_edit
end

# update the director page
post '/directors/:id' do
  director = Director.find params[:id]
  director.update :name => params[:name], :nationality => params[:nationality], :biography => params[:biography], :filmography => [:filmography], :image => params[:image]
  redirect to("/directors/#{director.id}")
end

# delete the director page
get '/directors/:id/delete' do
  director = Director.find params[:id]
  director.destroy
  redirect to('/directors')
end

# closes the connection after every ruby block is run
after do
  ActiveRecord::Base.connection.close
end
