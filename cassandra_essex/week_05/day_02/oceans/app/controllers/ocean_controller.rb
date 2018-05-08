class OceanController < ApplicationController

  def index
    @oceans = Ocean.all
  end

  def show
    @ocean = Ocean.find params[:id]
  end

  def new
  end

  def create
  	ocean = Ocean.new
  	ocean.name = params[:name]
  	ocean.image = params[:image]
  	ocean.totalarea = params[:totalarea]
  	ocean.maxdepth = params[:maxdepth]
  	ocean.shorelength = params[:shorelength]

  	ocean.save
  	redirect_to ocean_path(ocean.id)
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
      ocean.update :name => params[:name], :image => params[:image], :totalarea => params[:totalarea], :maxdepth => params[:maxdepth], :shorelength => params[:shorelength]
      redirect_to ocean_path(ocean.id)
    end



  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_new_path
  end

end
