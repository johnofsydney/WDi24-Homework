require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

get '/players' do
  @chelseateam = query_db 'SELECT * FROM chelseateam'

  erb :players_index
end

get '/players/new' do

  erb :players_new
end

post '/players' do
  query_db "INSERT INTO chelseateam (first_name, last_name, jersey, nationality, flag, position, image) VALUES ('#{params['first_name']}', '#{params['last_name']}', '#{params['position']}', '#{params['nationality']}', '#{params['flag']}', '#{params['jersey']}', '#{params['image']}')"
  redirect to('/players')
end

get '/players/:id' do
    @players = query_db('SELECT * FROM chelseateam WHERE id = ' + params[:id]).first
  erb :players_profile
end



get '/players/:id/edit' do
  @players = query_db('Select * FROM chelseateam WHERE id= ' + params[:id]).first

  erb :players_edit
end

post '/players/:id' do
  update = "UPDATE chelseateam SET first_name='#{params[:first_name]}', last_name='#{params[:last_name]}', position='#{params[:position]}',
  nationality='#{params[:nationality]}', flag='#{params[:flag]}', jersey='#{params[:jersey]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db update
  redirect to("players/#{params[:id]}")
end

get '/players/:id/delete' do
  query_db 'DELETE FROM chelseateam WHERE id= ' + params[:id]
  redirect to('/players')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement

  results = db.execute sql_statement
  db.close
  results
end
