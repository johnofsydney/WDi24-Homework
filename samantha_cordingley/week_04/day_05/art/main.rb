require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

#Rails will write this code for me next week
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#Rails will also write this. Logs SQL being written in terminal (optional)
ActiveRecord::Base.logger = Logger.new(STDERR)

#Connect active record to my sql table / must be singular
class Artwork < ActiveRecord::Base
  belongs_to :artist
end

#Connect active record to my artist sql table / must be singular
class Artist < ActiveRecord::Base
  has_many :artworks
end


#connect home page
get '/' do
  erb :home
end

#connect index page to show full list of artworks
get '/artworks' do
  @artworks = Artwork.all #get all artwork from database
  erb :artworks_index
end

#new page. Page to show 'create' form action
get '/artworks/new' do
  erb :artwork_new
end

#create action. post new artwork to database and as a result will display on index page
post '/artworks' do
  artwork = Artwork.new
  artwork.name = params[:name]
  artwork.author = params[:author]
  artwork.year = params[:year]
  artwork.canvas = params[:canvas]
  artwork.image = params[:image]
  artwork.artist_id = params[:artist_id]
  artwork.save #actually saves it
  redirect to ("/artworks/#{ artwork.id }") #get new artwork
end

#show page. Shows page for individual artwork
get '/artworks/:id' do
  @artwork = Artwork.find params[:id]
  erb :artwork_show
end

#edit page. Holds edit form
get '/artworks/:id/edit' do
  @artwork = Artwork.find params[:id]
  erb :artwork_edit
end

#post action to update data on database after Edit
post '/artworks/:id' do
  artwork = Artwork.find params[:id]
artwork.update :name => params[:name], :author => params[:author], :year => params[:year], :canvas => params[:canvas], :image => params[:image], :artist_id => params[:artist_id]
redirect to ("/artworks/#{ params[:id] }")
end

#delete action, allows something to delete an artwork
get '/artworks/:id/delete' do
  artwork = Artwork.find params[:id]
  artwork.destroy
  redirect to ('/artworks')
end

###################################################################

#index page to show full artist database
get '/artists' do
  @artists = Artist.all
  erb :artists_index
end

#new page to hold create form
get '/artists/new' do
  erb :artist_new
end

#post action for create form to add artist to database
post'/artists' do
  artist = Artist.new
  artist.name = params[:name]
  artist.bio = params[:bio]
  artist.save
  redirect to ("/artists/#{ artist.id }") #show page
end

#show artist single page, display full record details
get '/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artist_show
end

#edit page to hold update form
get '/artists/:id/edit' do
  @artist = Artist.find params[:id]
  erb :artist_edit
end

#post update form action, send new information to database
post '/artists/:id' do
  artist = Artist.find params[:id]
  artist.update :name => params[:name], :bio => params[:bio]
  redirect to ("/artists/#{ params[:id] }")
end

#delete action
get '/artists/:id/delete' do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to ('/artists')
end

#'after do' function to shut down the server after each function
after do
  ActiveRecord::Base.connection.close
end
