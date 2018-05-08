
class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.range = params[:range]
    mountain.image = params[:image]
    mountain.country = params[:country]
    mountain.feet = params[:feet]
    mountain.save

    redirect_to mountains_path
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update :name => params[:name], :range => params[:range], :image => params[:image], :country => params[:country], :feet => params[:feet]

    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end
end
