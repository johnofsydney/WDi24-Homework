require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#page to show all database content
get '/feels/index' do
  @feels = query_db 'SELECT * FROM log'
  erb :feels_index
end

#page with form to add content to Database
get '/feels/new' do
  erb :feels_new
end

#create action to post the form input to the database & create a new entry
post '/feels' do
  @feels = query_db "INSERT INTO feels(screenname, week, day, message) VALUES ('#{params[:screenname]}','#{params[:week]}','#{params[:day]}','#{params[:message]}')"
  redirect to ('/feels/index')
end

#show full post on each message
get '/feels/:id' do
  @feels = query_db('SELECT * FROM feels WHERE id = ' + params[:id]).first
  erb :feels_single
end

#edit screen/page. Allow someone to edit a post
get '/feels/:id/edit' do
  @feels = query_db('SELECT * FROM feels WHERE id = ' + params[:id]).first
  erb :feels_edit
end

#update an existing post in the database / 'post' the changes
post '/feels/:id' do
  update = "UPDATE to feels SET screenname='#{params[:screenname]}', week='#{params[:week]}', day='#{params[:day]}', message='#{params[:message]}' WHERE id= #{params[:id]}"
  query_db update # call the database and action the update
  redirect to("/feels/#{ params[:id]}")
end

#delete an entry
get '/feels/:id/delete' do
  query_db 'DELETE FROM feels WHERE id = ' + params[:id]
  redirect to('/feels/index')
end

#function to reload server each time these files are updated
def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement

  results = db.execute(sql_statement) #action statement
  db.close #close the database
  results #return result
end
