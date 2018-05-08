require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index: Shows all boulders
get '/boulders' do
  @boulders = query_db "SELECT * FROM boulders"
  erb :boulders_index
end

# New: Presents a form to fill in information for a new boulder
get '/boulders/new' do
  erb :boulders_new
end

# Create: Adds a new boulder to the database
post '/boulders' do
  query_db "INSERT INTO boulders (name, grade, crag, country, ascensionists, image) VALUES ('#{ params['name'] }', '#{ params['grade'] }', '#{ params['crag'] }', '#{ params['country'] }', '#{ params['ascensionists'] }', '#{ params['image'] }')"
  redirect to('/boulders')
end

# Show: Shows information for a single boulder
get '/boulders/:id' do
  @boulder = query_db("SELECT * FROM boulders WHERE id = #{ params[:id] }").first
  erb :boulders
end

# Edit: Shows the existing values for a single boulder for editing
get '/boulders/:id/edit' do
  @boulder = query_db("SELECT * FROM boulders WHERE id = #{ params[:id] }").first
  erb :boulders_edit
end

# Update: Updates an existing boulder in the database with new information
post '/boulders/:id' do
  update = "UPDATE boulders SET name='#{ params[:name] }', grade='#{ params[:grade] }', crag='#{ params[:crag] }', country='#{ params[:country] }', ascensionists='#{ params[:ascensionists] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
  query_db update

  redirect to("/boulders/#{ params[:id] }")
end

# Destroy: Deletes a boulder with the provided ID from the database
get '/boulders/:id/delete' do
  query_db "DELETE FROM boulders WHERE id = #{ params[:id] }"
  redirect to('/boulders')
end

def query_db sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  result = db.execute sql_statement
  db.close
  result
end
