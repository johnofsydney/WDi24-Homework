require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# to see SQL in CLI
ActiveRecord::Base.logger = Logger.new(STDERR)

class Band < ActiveRecord::Base
  # validates :name, presence: true  # validation, should fail/return false on .save or error on .save! if no name
  has_many :songs, dependent: :destroy

  def slug
    @slug = self.name.downcase.gsub ' ', '-'
    @slug = @slug.gsub /[^a-z-0-9]/, ''
    @slug = @slug.gsub /-{1,}/, '-'
  end

  def to_param  # to generate pretty urls
    "#{ id }-#{ slug }"
  end

end


class Song < ActiveRecord::Base
  # validates :name, presence: true
  belongs_to :band

  def slug
    @slug = self.name.downcase.gsub ' ', '-'
    @slug = @slug.gsub /[^a-z-0-9]/, ''
    @slug = @slug.gsub /-{1,}/, '-'
  end

  def to_param  # to generate pretty urls
    "#{ id }-#{ slug }"
  end
end


before do
    @countries = Band&.pluck(:country).uniq.sort
end



get '/' do
  erb :home
end

# index - show all BANDS
get '/bands' do
  @bands = Band.all.sort_by { |b| [b.name.downcase] }
  erb :bands_index
end

# index - show all SONGS
get '/songs' do
  @songs = Song.all.sort_by { |s| [s.name.downcase] }
  # @bands = Band.all
  erb :songs_index
end

# index - BANDS BY COUNTRY
get '/bands/countries/:country' do
  @bands = Band.where(:country => params[:country]).sort_by { |s| [s.name.downcase] }
  erb :bands_index
end

# new BAND - present form
get '/bands/new' do
  erb :bands_new
end

# new SONG - present form
get '/songs/new' do
  erb :songs_new
end

# new BAND - post
post '/bands' do
  band = Band.create name: params[:name], country: params[:country], year: params[:year].to_i, image: params[:image]
  redirect to("/bands/#{ band.to_param }")
end

# new SONG - post
post '/songs' do
  bands = Band.all
  band_exists = false
  bands.each do |b|
    if params[:band_name].downcase == b.name.downcase
      band_exists = true
      @b_id = b.id
    end
  end
  if band_exists == false
    Band.create name: params[:band_name], country: ''
    @b_id = Band.find_by(name: params[:band_name]).id
  end
  song = Song.create name: params[:name], album: params[:album], year: params[:year], band_id: @b_id
  redirect to("/songs/#{ song.to_param }")
end

# new SONG FROM BAND PAGE - present form
get '/songs/new/:url_name' do
  @band_name = Band.find(params['url_name'].to_i).name
  erb :songs_new
end

# edit BAND - present form
get '/bands/:url_name/edit' do
  @band = Band.find params['url_name'].to_i
  erb :bands_edit
end

# edit BAND - post
post '/bands/:url_name' do
  band = Band.find params[:url_name].to_i
  band.update :name => params[:name], :country => params[:country], :year => params[:year].to_i, :members => params[:members], :image => params[:image]
  redirect to("/bands/#{ params[:url_name] }")
end

# edit SONG - present form
get '/songs/:url_name/edit' do
  @song = Song.find params['url_name'].to_i
  erb :songs_edit
end

# edit SONG - Post
post '/songs/:url_name' do
  song = Song.find params[:url_name].to_i
  song.update :name => params[:name], :album => params[:album], :year => params[:year].to_i, :video => params[:video]
  redirect to("/songs/#{ params[:url_name] }")
end

# delete BAND
get '/bands/:url_name/delete' do
  band = Band.find params[:url_name]
  band.destroy
  redirect to('/bands')
end

# delete SONG
get '/songs/:url_name/delete' do
  song = Song.find params[:url_name]
  song.destroy

  redirect to('/songs')
end

# show - single BAND
get '/bands/:url_name' do
  @band = Band.find params['url_name'].to_i
  erb :bands_show
end


# show - single SONG
get '/songs/:url_name' do
  @song = Song.find params['url_name'].to_i
  @bands = Band.all
  erb :songs_show
end


after do
  ActiveRecord::Base.connection.close
end


def youtube_embed url
  # e.g. url https://www.youtube.com/watch?v=iZNwLsBUw08
  youtube_id = url.partition('watch?v=').last
  @youtube_str = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/#{ youtube_id }?rel=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>"
  # e.g. <iframe width="560" height="315" src="https://www.youtube.com/embed/iZNwLsBUw08" frameborder="0" allowfullscreen></iframe>
end
