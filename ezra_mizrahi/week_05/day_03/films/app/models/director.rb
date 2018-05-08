# == Schema Information
#
# Table name: directors
#
#  id          :integer          not null, primary key
#  name        :text
#  nationality :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Director < ActiveRecord::Base
  has_many :films 
end
