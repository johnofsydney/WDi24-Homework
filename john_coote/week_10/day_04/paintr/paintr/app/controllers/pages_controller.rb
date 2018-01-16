class PagesController < ApplicationController
  def index
  end

  def hamldemo
    @r = Random.rand
  end

end
