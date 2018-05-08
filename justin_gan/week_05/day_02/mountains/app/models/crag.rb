# == Schema Information
#
# Table name: crags
#
#  id            :integer          primary key
#  name          :text
#  image         :text
#  location      :text
#  elevation     :integer
#  parent_range  :text
#  mountain_type :text
#

class Crag < ActiveRecord::Base

end
