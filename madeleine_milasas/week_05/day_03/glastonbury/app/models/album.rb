# == Schema Information
#
# Table name: albums
#
#  id           :integer          not null, primary key
#  name         :text
#  release_date :date
#  image        :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  tracklist    :text
#  band_id      :integer
#

class Album < ActiveRecord::Base
  belongs_to :band, optional: true
end
