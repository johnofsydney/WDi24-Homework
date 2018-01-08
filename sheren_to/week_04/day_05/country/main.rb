
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Place < ActiveRecord::Base
end

class Cuisine < ActiveRecord::Base
end


get '/' do
  erb :home
end

get '/places' do
  @places = Place.all
  erb :index
end

get '/places/add' do
  erb :add
end

post '/places' do
  place = Place.new
  place.country = params[:country]
  place.city = params[:city]
  place.image = params[:image]
  place.save
  redirect to("/places/#{place.id}")
end

get 'places/:id' do
  @places = place.find params[:id]
  binding.pry
  erb :individual
end

get '/places/:id/edit' do
  @place = place.find params[:id]
  erb :edit
end

post 'places/:id' do
  place = place.find params[:id]
  place.update :country => params[:country],
  :city => params[:city], :image => params[:image]
  redirect to("/places/#{params[:id]}")
end

get '/places/:id/delete' do
  place = Place.find params[:id]
  place.destroy
  redirect to('/places')
end

###########

get '/cuisines' do
  @cuisines = Cuisine.all
  erb :cuisine_index
end

get '/cuisines/add' do
  erb :cuisines_add
end

post '/cusines' do
  cuisine = Cuisine.new
  cuisine.food = params[:food]
  cuisine.type = params[:type]
  cuisine.image = params[:image]
  cuisine.save
  redirect to("/cuisines/#{cuisine.id}")
end

get '/cusines/:id' do
  @cuisine = Cuisine.find params[:id]
  erb :cuisines_each
end

get '/cuisines/:id/edit' do
  @cuisine = Cuisine.find params[:id]
  erb :cuisines_edit
end

post '/plant/:id' do
  cuisine = Cuisine.find params[:id]
  cuisine.update :food => params[:food],
  :type => params[:type], :image => params[:image]
  redirect to("/cuisines/#{cusisine.id}")
end

get '/cuisines/:id/delete' do
  cuisine = Cuisine.find params[:id]
  cusisine.destroy
  redirect to('/cuisines')
end


after do
  ActiveRecord::Base.connection.close
end
