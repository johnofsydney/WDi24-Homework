class NumberController < ApplicationController
  def generate
    session[:number] = Random.rand(1..10)
  end

  def play
    @numbers = (1..10).to_a
  end

  def result
    @correct = false
    if params[:id].to_i != session[:number]
      messages = ["Nup", "Not that one", "No way", "Nope", "Kinda, but, no. No definitely not.", "Yeeeaa- Oh wait, no, it's not."]
      @message = messages[ Random.rand( messages.size ) ]
    else
      @message = "OMFG YOU GOT THE NUMBER"
      @correct = true
    end
  end

end
