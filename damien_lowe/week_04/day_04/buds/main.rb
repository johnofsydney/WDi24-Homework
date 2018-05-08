require "sqlite3"
require "pry"
require "sinatra"
require "sinatra/reloader"

get "/" do
  erb :home
end
