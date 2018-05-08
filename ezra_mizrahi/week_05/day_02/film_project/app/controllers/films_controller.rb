class FilmsController < ApplicationController

  def index
    @films = Film.all
  end

  def show
    @film = Film.find params[:id]
  end

  def new
  end

  def create
    film = Film.new
    film.title = params[:title]
    film.year = params[:year]
    film.director = params[:director]
    film.synopsis = params[:synopsis]
    film.language = params[:language]
    film.genre = params[:genre]
    film.image = params[:image]
    film.save

    redirect_to films_path
  end

  def edit
    @film = Film.find params[:id]
  end

  def update # does the update without needing to save
    film = Film.find params[:id]
    film.update :title => params[:title], :year => params[:year], :director => params[:director], :synopsis => params[:synopsis], :language => params[:language], :genre => params[:genre], :image => params[:image]

    redirect_to film_path(film.id)
  end

  def destroy
    film = Film.find params[:id]
    film.destroy
    redirect_to films_path
  end


end
