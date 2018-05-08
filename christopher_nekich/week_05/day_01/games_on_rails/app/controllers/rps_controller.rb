class RpsController < ApplicationController

  def game
  end

  def play
    @throw = params[:throw].upcase
    choice = [
      "rock",
      "paper",
      "scissors"
    ]
    @opp = choice[rand(0..2)].upcase

    if @throw == "ROCK" and @opp == "SCISSORS"
      @result = "WINNER"
    elsif @throw == "PAPER" and @opp == "ROCK"
      @result = "WINNER"
    elsif @throw == "SCISSORS" and @opp == "PAPER"
      @result = "WINNER"
    else
      @result = "LOSER"
    end
  end
end
