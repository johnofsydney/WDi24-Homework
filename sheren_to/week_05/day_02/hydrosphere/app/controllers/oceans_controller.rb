
class OceansController < ApplicationController

  def index
    @oceans = Ocean.all
  end

  def new
  end

  def create
    ocean = Ocean.new
    ocean.name = params[:name]
    ocean.image = params[:image]
    ocean.area = params[:area]
    ocean.depth = params[:depth]
    ocean.save
    redirect_to oceans_path
  end

  def show
    @ocean = Ocean.find params[:id]
    @images = Dir.glob("app/assets/images/:name/*.jpg")

    
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
    ocean.update :name => params[:name], :image => params[:image],
    :area => params[:area], :depth => params[:depth]
  end

  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end

end
