require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#page to show all database content
get '/log/index' do
  @log = query_db 'SELECT * FROM log'
  erb :log_index
end

#page with form to add content to Database
get '/log/new' do
  erb :log_new
end

#create action to post the form input to the database & create a new entry
post '/log' do
  @log = query_db "INSERT INTO log(screenname, week, day, message) VALUES ('#{params[:screenname]}','#{params[:week]}','#{params[:day]}','#{params[:message]}')"
  redirect to ('/log/index')
end

#show full post on each message
get '/log/:id' do
  @log = query_db('SELECT * FROM log WHERE id = ' + params[:id]).first
  erb :log_single
end

#edit screen/page. Allow someone to edit a post
get '/log/:id/edit' do
  @log = query_db('SELECT * FROM log WHERE id = ' + params[:id]).first
  erb :log_edit
end

#update an existing post in the database / 'post' the changes
post '/log/:id' do
  update = "UPDATE to log SET screenname='#{params[:screenname]}', week='#{params[:week]}', day='#{params[:day]}', message='#{params[:message]}' WHERE id= #{params[:id]}"
  query_db update # call the database and action the update
  redirect to("/log/#{ params[:id]}")
end

#delete an entry
get '/log/:id/delete' do
  query_db 'DELETE FROM log WHERE id = ' + params[:id]
  redirect to('/log/index')
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
