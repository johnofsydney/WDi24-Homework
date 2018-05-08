# == Schema Information
#
# Table name: authors
#
#  id         :integer          not null, primary key
#  first_name :text
#  last_name  :text
#  hometown   :text
#  dob        :date
#

class Author < ActiveRecord::Base
  has_many :books
end
