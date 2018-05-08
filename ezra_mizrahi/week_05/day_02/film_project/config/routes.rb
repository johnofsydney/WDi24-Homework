Rails.application.routes.draw do

  root :to => 'films#index'

  get '/films' => 'films#index' # shows all films

  get '/films/new' => 'films#new' # shows form for new film

  post '/films' => 'films#create' # shoves new film into db

  get '/films/:id' => 'films#show', :as => 'film' # shows a single film

  get '/films/:id/edit' => 'films#edit', :as => 'film_edit' # show form to edit film

  post '/films/:id' => 'films#update' # update existing film

  delete '/films/:id' => 'films#destroy' # deletes a film

end

# C new create
# R index show
# U edit update
# D delete
