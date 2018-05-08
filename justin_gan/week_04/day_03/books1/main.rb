require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get ('/') do
  erb :home
end

get ('/book') do
  begin
    @book = params[:book]
    book_info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{ @book }")["items"].first
    volume_info = book_info["volumeInfo"]
    @title = volume_info["title"]
    @authors = volume_info["authors"]
    @thumbnail = volume_info["imageLinks"]["thumbnail"]
    @isbn = volume_info["industryIdentifiers"][0]["identifier"]
    @buy_link = book_info["saleInfo"]["buyLink"]
  rescue
    redirect to('/')
  end

  # binding.pry
  erb :book
end
