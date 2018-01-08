
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

get '/travel' do
  @travel = query_db "SELECT * FROM travel"
  erb :travel_list
end

get '/travel/add' do
  erb :add_list
end

post '/travel' do
  query_db "INSERT INTO travel (city, country, image)
  VALUES ('#{params[:city]}', '#{params[:country]}', '#{params[:image]}')"
  redirect to('/travel')
end

get '/travel/:id' do
  @travel = query_db("SELECT * FROM travel WHERE id = " + params[:id]).first
  erb :each
end

get '/travel/:id/edit' do
  @travel = query_db('SELECT * FROM travel WHERE id = ' + params[:id]).first
  erb :travel_edit
end

post '/travel/:id' do
  update = "UPDATE travel SET city='#{params[:city]}', country='#{params[:country]}',
  image='#{params[:image]}' WHERE id = #{params[:id]}"
  query_db update
  redirect to("/travel/#{params[:id]}")
end

get '/travel/:id/delete' do
  query_db "DELETE FROM travel WHERE id = " + params[:id]
  redirect to('/travel')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement

  results = db.execute sql_statement
  db.close
  results
end
