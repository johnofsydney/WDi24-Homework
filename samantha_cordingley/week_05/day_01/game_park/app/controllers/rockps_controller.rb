class RockpsController < ApplicationController
  def form
  end

  def outcome
    @throw = params[:throw]
    @gameboard = ['rock', 'paper', 'scissors'];
    @computer = @gameboard.sample
    if (@throw == 'rock') && (@computer == 'scissors')
      @result = "You won!"
    elsif (@throw == 'scissors') && (@computer == 'rock')
        @result = "You lost!"
    elsif (@throw == 'paper') && (@computer == 'rock')
        @result = "You won!"
    elsif (@throw == 'rock') && (@computer == 'paper')
        @result = "You lost!"
    elsif (@throw == 'scissors') && (@computer == 'paper')
        @result = "You won!"
    elsif (@throw == 'paper') && (@computer == 'scissors')
        @result = "You lost!"
    elsif @throw == @computer
      @result = "It's a draw!"
    end
  end
end
