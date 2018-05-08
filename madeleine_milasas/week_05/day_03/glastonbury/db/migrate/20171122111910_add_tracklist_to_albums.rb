class AddTracklistToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :tracklist, :text
  end
end
