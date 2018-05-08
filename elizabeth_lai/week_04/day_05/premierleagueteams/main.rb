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

class Team < ActiveRecord::Base
  has_many :players
end

class Player < ActiveRecord::Base
  belongs_to :team
end

######## TEAMS
# before do
#   @families = Team.pluck()
# end

get '/' do
  erb :home
end

get '/teams' do
  @teams = Team.all
  erb :teams_index
end

get '/teams/new' do
  erb :teams_new
end

post '/teams' do
  team = Team.new
  team.name = params[:name]
  team.stadium = params[:stadium]
  team.coach = params[:coach]
  team.logo = params[:logo]
  team.save
  redirect to("/teams/#{team.id}")
end

get '/teams/:id' do
  @team = Team.find params[:id]
  erb :teams_profile
end

get '/teams/:id/edit' do
  @team = Team.find params[:id]
  erb :teams_edit
end

post '/teams/:id' do
  team = Team.find params[:id]
  team.update :name => params[:name], :stadium => params[:stadium], :coach => params[:coach], :logo => params[:logo]
  redirect to("/teams/#{team.id}")
end

get '/teams/:id/delete' do
  team = Team.find params[:id]
  team.destroy
  redirect to('/teams')
end

######## CHELSEAPLAYERS

get '/players' do
  @players = Player.all
  erb :players_index
end

get '/players/new' do
  erb :players_new
end

post '/players' do
  player = Player.new
  player.first_name = params[:first_name]
  player.last_name = params[:last_name]
  player.position = params[:position]
  player.nationality = params[:nationality]
  player.flag = params[:flag]
  player.jersey = params[:jersey]
  player.image = params[:image]
  player.save
  redirect to("/players/#{ player.id }")
end

get '/players/:id' do
    @player = Player.find params[:id]

  erb :players_profile
end

get '/players/:id/edit' do
  @player = Player.find params[:id]
  erb :players_edit
end

post '/players/:id' do
  player = Player.find params[:id]
  player.update :first_name => params[:first_name], :last_name => params[:last_name], :position => params[:position], :nationality => params[:nationality], :flag => params[:flag], :jersey => params[:jersey], :image => params[:image]
  redirect to("players/#{ player.id }")
end

get '/players/:id/delete' do
  player = Player.find params[:id]
  player.destroy
  redirect to('/players')
end

after do
  ActiveRecord::Base.connection.close
end
#
#
# def query_db(sql_statement)
#   db = SQLite3::Database.new 'database.sqlite3'
#   db.results_as_hash = true
#
#   puts sql_statement
#
#   results = db.execute sql_statement
#   db.close
#   results
# end
