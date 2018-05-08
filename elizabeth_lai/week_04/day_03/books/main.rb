require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/display' do
  redirect to ('/') if params[:title].empty?

  @title = params[:title].capitalize

  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"

  @info = HTTParty.get(url);


  @cover = @info['items'].first['volumeInfo']['imageLinks']['thumbnail']

  @author = @info['items'].first['volumeInfo']['authors']

  @blurb = @info['items'].first['volumeInfo']['description']
  erb :display

  # @author = params[:author].capitalize
  #
  # url = "https://www.googleapis.com/books/v1/volumes?q=authors:#{@author}"
  #
  # @info2 = HTTParty.get(url)
  #
  # @author = @info2['items'].first['volumeInfo']['authors']
end
