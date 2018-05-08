require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

get '/blues' do
  @blues = query_db "SELECT * FROM blues"
  erb :blues_index
end



get '/blues/new' do

  erb :blues_new
end

get '/blues/notable' do
  erb :blues_notable
end

post '/blues' do
  query_db "INSERT INTO blues (name, hex, image, rating, description) VALUES ('#{params[:name]}', '#{params[:hex]}', '#{params[:image]}', '#{params[:rating]}', '#{params[:description]}')"

  redirect to ('/blues')
end

get '/blues/:id' do
  @blues = query_db("SELECT * FROM blues WHERE id=" + params[:id]).first
  erb :blues_show
end

get '/blues/:id/edit' do
  @blues = query_db("SELECT * FROM blues WHERE id=" + params[:id]).first

  erb :blues_edit
end

post '/blues/:id' do
  update = "UPDATE blues SET name='#{params[:name]}', hex='#{params[:hex]}', image='#{params[:image]}', rating='#{params[:rating]}', description='#{params[:description]}' WHERE id='#{params[:id]}' "
  query_db update
  redirect to("/blues/#{params[:id]}")
end

get '/blues/:id/delete' do
  query_db "DELETE FROM blues WHERE id=" + params[:id]
  redirect to('/blues')
end

def query_db(sql_statement)
  db = SQLite3::Database.new "database.sqlite3"
  db.results_as_hash = true

  puts sql_statement #nice for debugging

  results = db.execute(sql_statement)
  db.close
  results
end
