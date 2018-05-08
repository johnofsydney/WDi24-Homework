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

class User < ActiveRecord::Base
  has_many :cakes
end

class Cake < ActiveRecord::Base
  has_one :user
end


get '/' do
  erb :home
end

get '/users' do
  @users = User.all
  erb :users_index
end

get '/users/new' do
  erb :users_new
end

post '/users' do
  user = User.new
  user.name = params[:name]
  user.username = params[:username]
  user.image = params[:image]
  user.save

  redirect to ("/users")
end

get '/users/:id' do
  @user = User.find params[:id]
  @cakes = @user.cakes
  erb :users_show
end

get '/users/:id/addcake' do
  @id = params[:id]
  erb :cake_append
end

post '/users/:id/cakes' do
  @user = User.find params[:id]
  @user.cakes.create(name: params[:name], image: params[:image], description: params[:description])

  redirect to("/users/" + params[:id])
end

get '/users/:id/edit' do
  @user = User.find params[:id]
  erb :users_edit
end

post '/users/:id' do
  user = User.find params[:id]
  user.update :name => params[:name], :image => params[:image], :username => params[:username]

  redirect ('/users/' + params[:id])
end

get '/cakes' do
  @cakes = Cake.all
  erb :cakes_index
end

get '/cakes/:id' do
  @cake = Cake.find params[:id]
  erb :cakes_show
end

get '/cakes/:id/delete' do
  cake = Cake.find params[:id]
  cake.destroy

  redirect back
end

get '/cakes/:id/edit' do
  @cake = Cake.find params[:id]
  erb :cakes_edit
end

post '/cakes/:id' do
  cake = Cake.find params[:id]
  cake.update :name => params[:name], :image => params[:image], :description => params[:description]

  redirect '/users'
end



# get '/cakes/new' do
#   erb :cakes_new
# end

# post '/cakes' do
#   cake = Cake.new
#   cake.name = params[:name]
#   cake.image = params[:image]
#   cake.description = params[:description]
#   cake.save
#
#   redirect to ('/cakes')
# end

after do
  ActiveRecord::Base.connection.close
end
