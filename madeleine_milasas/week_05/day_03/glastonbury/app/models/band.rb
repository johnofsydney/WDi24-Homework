# == Schema Information
#
# Table name: bands
#
#  id         :integer          not null, primary key
#  name       :text
#  country    :text
#  year       :text
#  members    :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Band < ActiveRecord::Base
  has_many :albums
end
