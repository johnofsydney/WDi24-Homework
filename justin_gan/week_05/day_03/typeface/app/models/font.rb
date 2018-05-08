# == Schema Information
#
# Table name: fonts
#
#  id             :integer          not null, primary key
#  name           :text
#  classification :text
#  designer       :text
#  year_created   :integer
#  image          :text
#  category_id    :integer
#

class Font < ActiveRecord::Base
  belongs_to :category
end
