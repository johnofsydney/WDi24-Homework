class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('id DESC') # Reverse order

    respond_to do |format|
      format.html {} # This empty block tells Rails to continue its default behaviour of rendering index
      format.json { render :json => @fruits }
    end
  end

  # def create
  #   if fruit_params[:name].length != 0
  #     fruit = Fruit.create fruit_params
  #     redirect_to fruit
  #   else
  #     redirect_to new_fruit_path
  #   end
  # end

  def create
    @fruit = Fruit.new fruit_params
    if @fruit.save
      redirect_to @fruit
    else
      redirect_to :new
    end
  end

   
  def new
    @fruit = Fruit.new
  end


  def show
    @fruit = Fruit.find_by :id => params[:id]
    respond_to do |format|
      format.html {} # This empty block tells Rails to continue its default behaviour of rendering index
      format.json { render :json => @fruit }
    end
  end

end





private
def fruit_params
  params.require(:fruit).permit(:name)
end
