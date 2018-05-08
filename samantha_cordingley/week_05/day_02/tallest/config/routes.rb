Rails.application.routes.draw do
  root :to => 'mountains#index'
  get '/mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'
  get 'mountains/:id/edit' => 'mountains#edit', :as => 'mountain_edit'
  post '/mountains/:id' => 'mountains#update'
  delete '/mountains/:id' => 'mountains#destroy'
end


# get '/planets/new' => 'planets#new' #shows the form for a new planet
# post '/planets' => 'planets#create' #puts new planet in database
# get '/planets/:id' => 'planets#show', :as => 'planet' #shows one planet on its own page
# #putting :as => 'planet' tells it what to name the show page
# get '/planets/:id/edit' => 'planets#edit', :as => 'planet_edit'
# post '/planets/:id' => 'planets#update'
# delete '/planets/:id' => 'planets#destroy'
#
# end
