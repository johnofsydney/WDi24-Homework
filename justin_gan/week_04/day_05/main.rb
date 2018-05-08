require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Boulder < ActiveRecord::Base
  belongs_to :country
end

class Country < ActiveRecord::Base
  has_many :boulders
end

get '/' do
  erb :home
end

# Index
get '/boulders' do
  @boulders = Boulder.all
  erb :boulders_index
end

# New
get '/boulders/new' do
  erb :boulders_new
end

# Create
post '/boulders' do
  # TODO: country/boulder association
  country = Country.new
  country.name = params[:country]
  country.save
  boulder = Boulder.new
  boulder.name = params[:name].capitalize
  boulder.grade = params[:grade]
  boulder.crag = params[:crag].capitalize
  boulder.country_id = country.id
  boulder.ascensionists = params[:ascensionists].capitalize
  boulder.image = params[:image]
  boulder.save

  redirect to ("/boulders/#{ boulder.id }")
end

# Show
get '/boulders/:id' do
  @boulder = Boulder.find params[:id]
  erb :boulders_show
end

# Edit
get '/boulders/:id/edit' do
  @boulder = Boulder.find params[:id]
  erb :boulders_edit
end

# Update
post '/boulders/:id' do
  boulder = Boulder.find params[:id]
  boulder.update :name => params[:name],
                 :grade => params[:grade],
                 :crag => params[:crag].capitalize,
                 :ascensionists => params[:ascensionists].capitalize,
                 :image => params[:image]
  # TODO: country/boulder association
  boulder.country.update :name => params[:country.capitalize]

  redirect to("/boulders/#{ boulder.id }")
end

# Delete
get '/boulders/:id/delete' do
  boulder = Boulder.find params[:id]
  boulder.destroy
  redirect to("/boulders")
end

###############################################################################

# Index
get '/countries' do
  @countries = Country.all
  erb :countries_index
end

# New
get '/countries/new' do
  erb :countries_new
end

# Create
post '/countries' do
  country = Country.new
  country.name = params[:name].capitalize
  country.continent = params[:continent].capitalize
  country.capital = params[:capital].capitalize
  country.area = params[:area]
  country.population = params[:population]
  country.save

  redirect to("/countries/#{ country.id }")
end

# Show
get '/countries/:id' do
  @country = Country.find params[:id]
  erb :countries_show
end

# Edit
get '/countries/:id/edit' do
  @country = Country.find params[:id]
  erb :countries_edit
end

# Update
post '/countries/:id' do
  country = Country.find params[:id]
  country.update :name => params[:name].capitalize,
                 :continent => params[:continent].capitalize,
                 :capital => params[:capital].capitalize,
                 :area => params[:area],
                 :population => params[:population]

  redirect to("/countries/#{ country.id }")
end

# Delete
get '/countries/:id/delete' do
  country = Country.find params[:id]
  country.destroy
  redirect to("/countries")
end

after do
  ActiveRecord::Base.connection.close
end
