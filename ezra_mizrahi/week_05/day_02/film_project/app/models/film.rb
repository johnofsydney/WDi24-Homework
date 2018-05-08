# == Schema Information
#
# Table name: films
#
#  id       :integer          primary key
#  title    :text
#  year     :integer
#  director :text
#  synopsis :text
#  language :text
#  genre    :text
#  image    :text
#

class Film < ActiveRecord::Base
end
