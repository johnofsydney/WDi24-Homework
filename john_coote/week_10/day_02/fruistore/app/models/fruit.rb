# == Schema Information
#
# Table name: fruits
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Fruit < ApplicationRecord

  def squishy?
    true
  end
  
end
