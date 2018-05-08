class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all.sort_by { |m| [m.name.downcase] }
  end

  def new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.base_height = params[:base_height].to_i
    mountain.sea_height = params[:sea_height].to_i
    mountain.location = params[:location]
    mountain.fact = params[:fact]
    mountain.save

    redirect_to mountains_path
  end

  def show
    @mountain = Mountain.find params[:slug].to_i # just take int at start of slug to search by
    @confirm = "Are you sure you want to destroy this mountain?
                                  _________
                     __,-~~/~             `---.
                  _/__,---(                ,        )
            __ /             (              /         )  \\___
-----===;;;'====------------------======;;;=======----- -  -
                \\\/  ~\"~\"~\"~\"~\"~\\~\"~\"~\"~\"~~)~\"
                  (_ (      \\   (              >      \\)
                     <( _   <                  >_>
                          ~ `-i' ::>|--\"
                                 I;|.|.|
                                 |i::|i|
    (` ^'\"`-' \")(` ^'\"`-' \")(` ^'\"`-' \")(` ^'\"`-' \")(` ^'\"`-' \")
---------------------------------------------------------------------------"
  end

  def edit
    @mountain = Mountain.find params[:slug].to_i # just take int at start of slug to search by
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update :name => params[:name], :image => params[:image], :base_height => params[:base_height].to_i, :sea_height => params[:sea_height].to_i, :location => params[:location], :fact => params[:fact]

    redirect_to mountain_path(mountain.to_param)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy

    redirect_to mountains_path
  end

end
