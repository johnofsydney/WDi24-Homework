class ParksController < ApplicationController
  def index
    @parks = Park.all
  end

  def profile
    @park = Park.find params[:id]
  end

  def new

  end

  def create
    park = Park.new
    park.name = params[:name]
    park.state = params[:state]
    park.nearest_city = params[:nearest_city]
    park.size = params[:size]
    park.image = params[:image]
    park.save

    redirect_to parks_path
  end

  def edit
    @park = Park.find params[:id]
  end

  def update
    park = Park.find params[:id]
    park.update :name => params[:name], :state => params[:state], :nearest_city => params[:nearest_city], :size => params[:size], :image => params[:image]
    redirect_to park_path(park.id)
  end

  def destroy
    park = Park.find params[:id]
    park.destroy
    redirect_to parks_path

  end

end
