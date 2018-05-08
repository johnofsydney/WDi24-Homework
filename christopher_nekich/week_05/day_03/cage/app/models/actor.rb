# == Schema Information
#
# Table name: actors
#
#  id          :integer          not null, primary key
#  name        :text
#  nationality :text
#  dob         :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Actor < ActiveRecord::Base
  has_many :movies
end
