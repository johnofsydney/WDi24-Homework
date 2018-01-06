# == Schema Information
#
# Table name: parks
#
#  id           :integer          primary key
#  name         :text
#  state        :text
#  nearest_city :text
#  size         :float
#  known_for    :text
#  image        :text
#

class Park < ActiveRecord::Base
end
