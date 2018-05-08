# == Schema Information
#
# Table name: categories
#
#  id          :integer          not null, primary key
#  name        :text
#  image       :text
#  description :text
#

class Category < ActiveRecord::Base
  has_many :fonts
end
