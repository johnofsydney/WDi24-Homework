# == Schema Information
#
# Table name: works
#
#  id         :integer          not null, primary key
#  title      :text
#  material   :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  artist_id  :integer
#

class Work < ActiveRecord::Base
  belongs_to :artist
end
