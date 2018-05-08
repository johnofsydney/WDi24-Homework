# == Schema Information
#
# Table name: mountains
#
#  id          :integer          primary key
#  name        :text
#  image       :text
#  base_height :integer
#  sea_height  :integer
#  location    :text
#  fact        :text
#

class Mountain < ActiveRecord::Base
  def slug
    @slug = self.name.downcase.gsub ' ', '-'
    @slug = I18n.transliterate( @slug )
    @slug = @slug.gsub /[^a-z-0-9]/, ''
    @slug = @slug.gsub /-{1,}/, '-'
  end

  def to_param
    "#{ id }-#{ slug }"
  end
end
