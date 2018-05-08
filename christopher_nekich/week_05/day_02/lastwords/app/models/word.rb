# == Schema Information
#
# Table name: words
#
#  id          :integer          primary key
#  name        :text
#  quote       :text
#  description :text
#  died_from   :text
#  died        :text
#  death_age   :integer
#  image       :text
#

class Word < ActiveRecord::Base

end
