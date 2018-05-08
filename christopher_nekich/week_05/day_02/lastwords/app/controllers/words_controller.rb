class WordsController < ApplicationController

def home
end

def index
  @words = Word.all
end

def new
end

def create
  word = Word.new
  word.name = params[:name]
  word.quote = params[:quote]
  word.description = params[:description]
  word.died_from = params[:died_from]
  word.died = params[:died]
  word.death_age = params[:death_age]
  word.image = params[:image]

  word.save
  redirect_to words_path
end

def show
end

def destroy
  word = Word.find params[:id]
  word.destroy
  redirect_to words_path
end

def edit
  @word = Word.find params[:id]
end

def update
  word = Word.find params[:id]
  word.update :name => params[:name], :quote => params[:quote], :description => params[:description], :died_from => params[:died_from], :died => params[:died], :death_age => params[:death_age], :image => params[:image]
  redirect_to words_path
end

end
