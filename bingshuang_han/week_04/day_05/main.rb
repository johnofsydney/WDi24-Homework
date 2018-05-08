require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'



ActiveRecord::Base.establish_connection(
  :adapter =>'sqlite3',
  :database=>'database.sqlite3'
)



ActiveRecord::Base.logger = Logger.new (STDERR)

class Ninja < ActiveRecord::Base

end

class Country < ActiveRecord::Base
end

# binding.pry
before do
  @villages = Ninja.pluck(:country).uniq
end

get '/' do
  erb :home
end

get '/ninjas' do
  @ninjas = Ninja.all
  erb :ninjas_index
  # binding.pry
end

get '/ninjas/countries/:country' do
  @ninjas = Ninja.where :country => params[:country]
  erb :ninjas_index
end

get '/ninjas/new' do
  erb :ninjas_new
end

post '/ninjas' do
  ninja = Ninja.new
  ninja.name = params[:name]
  ninja.birthday = params[:birthday]
  ninja.country = params[:country]
  ninja.nature_type = params[:nature_type]
  ninja.image = params[:image]
  ninja.story = params[:story]
  ninja.save
  redirect to ('/ninjas')
end



get '/ninjas/:id' do
  @ninja = Ninja.find params[:id]
  erb :ninjas_show
end


get '/ninjas/:id/edit' do
   @ninja = Ninja.find params[:id]
   erb :ninjas_edit
end

post '/ninjas/:id' do
  ninja = Ninja.find params[:id]
  ninja.update :name => params[:name], :birthday =>params[:birthday], :country =>params[:country], :nature_type => params[:nature_type], :image => params[:image], :story => params[:story]
  # binding.pry
  redirect to ('/ninjas/#{ninja.id}')
end

get '/ninjas/:id/delete' do
  ninja = Ninja.find params[:id]
  ninja.destroy
  redirect to ('/ninjas')
end


########################Country table#######################

get '/countries' do
  @countries = Country.all
  erb :countries_index
  # binding.pry
end

get '/countries/new' do
  erb :countries_new

end

post '/countries' do
  @country = Country.new
  @country.name = params[:name]
  @country.ninja = params[:ninja]
  @country.tag = params[:tag]
  @country.image = params[:image]
  @country.save
  # binding.pry
  redirect to ('/countries/#{@country.id}')
end

get '/countries/:id' do
  @country = Country.find params[:id]
  erb :countries_show
end

get '/countries/:id/edit' do
  @country = Country.find params[:id]
  erb :countries_edit
end


get '/countries/:id/delete' do
  @country  = Country.find params[:id]
  @country.destroy
  redirect to ('/countries')
end
