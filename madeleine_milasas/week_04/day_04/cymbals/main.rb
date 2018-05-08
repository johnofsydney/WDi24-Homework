require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# index
get '/cymbals' do
  @cymbals = query_db 'SELECT * FROM cymbals'
  erb :cymbals_index
end

# new
get '/cymbals/new' do
  erb :cymbals_new
end

# post new
post '/cymbals' do
  query_db("INSERT INTO cymbals (maker, name, type, sound, size, video) VALUES ('#{ params['maker'] }', '#{ params['name'] }', '#{ params['type'] }', '#{ params['sound'] }', '#{ params['size'].to_i }', '#{ params['video'] }')")
  redirect to('/cymbals') # back to index page
end

# edit page - show existing values for editing
get '/cymbals/:id/edit' do
  @cymbal = query_db("SELECT * FROM cymbals WHERE id = #{ params['id'] }").first
  erb :cymbals_edit
end

# post update
post '/cymbals/:id' do
  update = "UPDATE cymbals SET maker='#{ params['maker'] }', name='#{ params['name'] }', type='#{ params['type'] }', sound='#{ params['sound'] }', size='#{ params['size'].to_i }', video='#{ params['video'] }' WHERE id = #{ params['id'] }"
  query_db update
  redirect to("/cymbals/#{ params['id'] }")
end

# delete
get '/cymbals/:id/delete' do
  query_db("DELETE FROM cymbals WHERE id = #{ params['id'] }")
  redirect to('/cymbals')
end

# show
get '/cymbals/:id' do
  @cymbal = query_db("SELECT * FROM cymbals WHERE id = #{ params[:id] }").first
  erb :cymbals_show
end






def query_db sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  puts sql_statement
  results = db.execute sql_statement
  db.close
  results
end

def youtube_embed url
  # e.g. url https://www.youtube.com/watch?v=iZNwLsBUw08
  youtube_id = url.partition('watch?v=').last
  @youtube_str = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/#{ youtube_id }?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>"
  # e.g. <iframe width="560" height="315" src="https://www.youtube.com/embed/iZNwLsBUw08" frameborder="0" allowfullscreen></iframe>
end
