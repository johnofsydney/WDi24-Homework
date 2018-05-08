class CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def new
    @category = Category.new
  end

  def edit
    category = Category.create
  end

  def show
    @category = Category.find params[:id]
  end
end
