# == Schema Information
#
# Table name: movies
#
#  id         :integer          not null, primary key
#  title      :text
#  rating     :text
#  country    :text
#  release    :text
#  cover      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  actor_id   :integer
#

class Movie < ActiveRecord::Base
  belongs_to :actor
end
