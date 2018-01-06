class SecretnumberController < ApplicationController
  def form

  end

  def answer
   @r = Random.rand(0...10)

  end

end
