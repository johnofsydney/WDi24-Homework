# == Schema Information
#
# Table name: events
#
#  id    :integer          not null, primary key
#  name  :text
#  days  :text
#  image :text
#

class Event < ActiveRecord::Base
  belongs_to :month
end
