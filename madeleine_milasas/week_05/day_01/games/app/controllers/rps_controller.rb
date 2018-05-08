class RpsController < ApplicationController
  def start
  end

  def result
    @win_msg = ''
    @rps = ['rock', 'paper', 'scissors']
    @ai = @rps.sample                          # give AI a random turn
    @user = @rps.index params[:throw]          # determine user's choice as a number
    @results = @rps.rotate( @user - 1 )        # user choice is now at index 1
    # COMPARE: if user index is higher than ai index they won and vv or == is a draw
    case
    when 1 > @results.index( @ai ) then @win_msg = "You won!"
    when 1 < @results.index( @ai ) then @win_msg = "You lost :("
    when 1 == @results.index( @ai ) then @win_msg = "It's a draw"
    end
  end
end
