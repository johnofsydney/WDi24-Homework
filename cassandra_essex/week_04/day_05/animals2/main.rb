require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'artice_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3'
  :database => 'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)

class Bigcat < ActiveRecord::Base
end

class Country < ActiveRecord::Base
end

before do
  @bigcats = Bigcat.pluck(:country).uniq
  erb :home
end

get '/' do
erb :home
end

get'bigcats' do
  @bigcats = Bigcat.all
  erb :bigcats_index
end

get '/bigcats/countries/:country' do
  @bigcats = Bigcat.where :country => params [:country]
  erb :bigcats_index
end

get '/bigcats/new' do
  erb :bigcats_new
end


post '/bigcats' do
bigcat = Bigcat.new
bigcat.name = params[:name]
bigcat.country = params[:country]
bigcat.population = params[:population]
bigcat.image = params[:image]
bigcat.save
redirect to("/bigcats/#{ bigcat.id}")
end


get 'bigcats/:id' do
  @bigcats = Bigcat.find params[:id]
  erb :bigcats_show
end

get 'bigcats/:id/edit' do
  @bigcat = Bigcat.find params[:id]
  erb :bigcats_edit
end

post '/bigcats/:id' do
  bigcat = Bigcat.find params[:id]
  bigcat.update :name =>params[:name], :country => params[:country], :population => params[:population], :image => params[:image]
  redirect to("bigcats/#{ params[:id]}")
end

get 'bigcats/:id/delete' do
  bigcat = Bigcat.find params[:id]
  bigcat.destroy
  redirect to ('bigcats')
end
######################################################################

get '/countries' do
  @countries = Country.all
  erb :countries_index
end

get '/countries/new' do
  erb :countries_new
end

post '/countries' do
  country = Country.new
  country.name params[:name]
  country.language params[:language]
  country.image params[:image]
  country.save
  redirect to ("/countries/#{ country.id}")
end

get 'countries/:id' do
  @countries = Country.find params[:id]
  erb :countries_show
end

get '/countries/:id/edit' do
  @country =Country.find params[:id]
  erb :plants_edit
end

post '/countries/:id' do
  country = Country.find params[:id]
  country.update :name => params[:name],:language => params[:language], :image => params[:image]
  redirect to("/countries/#{ countries}")
end

get '/countries/:id/delete' do
  country = Country.find params[:id]
  country.destroy
  redirect to ('/countries')
end

after do
  ActiveRecord::Base.connection.close
end
