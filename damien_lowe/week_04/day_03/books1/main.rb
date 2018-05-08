require "sinatra"
require "sinatra/reloader"
require "pry"
require "httparty"

get "/" do
  erb :forms
end

get "/display" do

  title = params[:title]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
  info = HTTParty.get url
  @cover_image = info['items'].first['volumeInfo']['imageLinks']['thumbnail']
  @saleInfo = info["items"][1]["saleInfo"]
  @description = info["items"].first["volumeInfo"]["description"]
  @retail_price = info["items"][0]["saleInfo"]["retailPrice"]["amount"]
  @author = info["items"][0]["volumeInfo"]["authors"][0]
  erb :display
end
