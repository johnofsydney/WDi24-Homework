require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :home
# "hello world"
end

get '/lookup' do
  @book_title =

  HTTParty.get url['items'].first['volumeInfo']['publisher'].keys
  url="https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
  erb :lookup
end
