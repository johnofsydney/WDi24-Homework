# == Schema Information
#
# Table name: films
#
#  id          :integer          not null, primary key
#  title       :text
#  year        :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  director_id :integer
#

class Film < ActiveRecord::Base
  belongs_to :director 
end
