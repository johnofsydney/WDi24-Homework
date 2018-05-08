require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  "Wellcome to Naruto world"
  erb :home
end

get '/narutos' do
  @narutos = query_db 'SELECT * FROM narutos'
  puts @narutos
  erb :narutos_index
end

get '/narutos/new' do
  erb :narutos_new

end

post '/narutos' do
  if params[:name]!=""
  query_db "INSERT INTO narutos (name, birthday, kekkei_genkai, nature_type, image, story) VALUES ('#{params[:name]}','#{params[:birthday]}','#{params[:kekkei_genkai]}','#{params[:nature_type]}','#{params[:image]}','#{params[:story]}')"
  # binding.pry
  end
  redirect to ('/narutos')
end


get '/narutos/:id' do
  @naruto = (query_db 'SELECT * FROM narutos WHERE id = '+ params['id']).first
  # binding.pry
  erb :narutos_show
end



get '/narutos/:id/edit' do
  @naruto = (query_db 'SELECT * FROM narutos WHERE id ='+params[:id]).first
  # binding.pry
  erb :narutos_edit
end

post '/narutos/:id' do
  update = "UPDATE narutos SET name = '#{params[:name]}' ,birthday = '#{params[:birthday]}',kekkei_genkai='#{params[:kekkei_genkai]}', nature_type ='#{params[:nature_type]}', image = '#{params[:image]}',story = '#{params[:story]}' WHERE id = '#{params[:id]}' "
  query_db update
  # binding.pry
  redirect to ("/narutos/#{params[:id]}" )

end

get '/narutos/:id/delete' do
  query_db 'DELETE FROM narutos WHERE id = '+ params[:id]

  redirect to ('/narutos')

end

def query_db sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement

  db.close
  results

end
