
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/search' do

  # redirect to('/') if params[:book_title].empty?

  @book_title = params[:book_title]
  # # title = params['book_title']
  # binding.pry
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"

  info = HTTParty.get(url)

  @title = info['items'].first['volumeInfo']['title']
  @authors = info['items'].first['volumeInfo']['authors']
  @category = info['items'].first['volumeInfo']['categories']
  @description = info['items'].first['volumeInfo']['description']
  @image = info['items'].first['volumeInfo']['imageLinks']['thumbnail']

  # url = https://www.googleapis.com/books/v1/volumes?q=title:Ulysses

  # begin
  #   #if book doesn't exist or match title?
  #
  # rescue
  #   redirect to('/')
  #
  # end

  erb :search
end
#instead of == nil, could be .nil
