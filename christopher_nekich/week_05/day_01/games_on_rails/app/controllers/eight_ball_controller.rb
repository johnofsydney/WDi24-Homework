class EightBallController < ApplicationController

  def game
  end

  def result
    @question = params[:question]
    @responses = [
      "Deal with your problems yourselves, like adults - Ron Swanson",
      "No",
      "Maybe",
      "I don't know, magic isn't real dumbass"
    ]
  end

end
