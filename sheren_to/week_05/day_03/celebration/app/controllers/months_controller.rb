class MonthsController < ApplicationController

  def index
    @months = Month.all
  end

  def new
    @month = Month.new
  end

  def create
    month = Month.create month_params
    redirect_to month
  end

  def edit
    @month = Month.find params[:id]
  end

  def update
    month = Month.find params[:id]
    month.update month_params
    redirect_to month
  end

  def show
    @month = Month.find params[:id]
  end

  def destroy
    month = Month.find params[:id]
    month.destroy
    redirect_to months_path
  end

  private
  def month_params
    params.require(:month).permit(:name, :days, :image)
  end
end
