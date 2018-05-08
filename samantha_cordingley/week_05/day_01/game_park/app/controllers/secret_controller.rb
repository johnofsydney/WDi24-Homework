class SecretController < ApplicationController
  def secret
  end

  def answer
    @guess = params[:guess]
    @secret_number = 1 + rand(10)
  #   if @guess == @secret_number
  #     @result = "Correct!"
  #   else
  #     @result = "Wrong!"
  # end
  end
end
