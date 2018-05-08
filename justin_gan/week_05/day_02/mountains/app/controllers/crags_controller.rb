class CragsController < ApplicationController
  def home
    @crags = Crag.all
  end

  def show
    @crag = Crag.find params[:id]
  end

  def new
  end

  def create
    crag = Crag.new
    crag.name = params[:name]
    crag.image = params[:image]
    crag.location = params[:location]
    crag.parent_range = params[:parent_range]
    crag.elevation = params[:elevation]
    crag.mountain_type = params[:mountain_type].capitalize
    crag.save

    redirect_to crag_path(crag.id)
  end

  def edit
    @crag = Crag.find params[:id]
  end

  def update
    crag = Crag.find params[:id]
    crag.update :name => params[:name],
                :image => params[:image],
                :location => params[:location],
                :parent_range => params[:parent_range],
                :elevation => params[:elevation],
                :mountain_type => params[:mountain_type]

    redirect_to crag_path(crag.id)
  end

  def destroy
    crag = Crag.find params[:id]
    crag.destroy
    redirect_to crags_path
  end
end
