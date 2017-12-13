# == Schema Information
#
# Table name: months
#
#  id    :integer          not null, primary key
#  name  :text
#  days  :text
#  image :text
#

class Month < ActiveRecord::Base
  has_many :events
end
