require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
  erb :home
end

get '/animals' do
  @animals = query_db 'SELECT * FROM animals'
  erb :animals_index
end

get '/animals/new' do
  erb :animals_new
end

post '/animals' do
  db.execute "INSERT INTO animals (name, country, population, image) VALUES ('#{ params [:name]}', '#{ params [:country]}', '#{ params [:population]}', '#{ params [:image]}')"
  redirect to ('/animals')
end

get '/animals/:id' do
  @animals = query_db('SELECT * FROM animals WHERE id = ' + params[:id]).first
  erb :animals_show
end

get '/animals/:id/edit' do
  @animals = query_db('SELECT * FROM animals WHERE id = ' + params[:id]).first
  erb :animals_edit
end

post '/animals/:id' do
  update = "UPDATE animals SET name='#{ params[:name] }', country='#{ params[:country] }', population='#{ params[:population] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
  query_db update
  redirect to ("/animals/#{ params[:id] }")
end

get '/animals/:id/delete' do
  query_db 'DELETE FROM animals WHERE id = ' + params[:id]
  redirect to ('/animals')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement

  results = db.execute sql_statement
  db.close
  results
end
