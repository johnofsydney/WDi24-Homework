class SecretNumberController < ApplicationController

  def game
  end

  def result
    @num = params[:num].to_i
    @win = rand(1..10)
    if @num == @win
      @result = "WINNER"
    else
      @result = "LOSER"
    end
  end

end
