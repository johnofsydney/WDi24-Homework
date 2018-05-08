Rails.application.routes.draw do
  root :to => 'mountains#index'
  get '/mountains' => 'mountains#index' # index of all mountains
  get '/mountains/new' => 'mountains#new'  # provide form for new mountain
  post '/mountains' => 'mountains#create' # makes a new mountain arise from the earth
  get '/mountains/:slug' => 'mountains#show', :as => "mountain" # show single mountain info
  get '/mountains/:slug/edit' => 'mountains#edit', :as => "mountain_edit" # provide form to edit mtn
  post '/mountains/:id' => 'mountains#update' # update db
  delete '/mountains/:id' => 'mountains#destroy'
end
