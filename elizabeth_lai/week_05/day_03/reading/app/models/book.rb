# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  name       :text
#  author     :text
#  genre      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ActiveRecord::Base
  belongs_to :authors
end
