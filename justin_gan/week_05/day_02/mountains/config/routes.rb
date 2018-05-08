Rails.application.routes.draw do
  root :to => 'crags#home'
  get '/crags' => 'crags#home' # Index

  get '/crags/new' => 'crags#new' # New
  post '/crags' => 'crags#create' # create

  get '/crags/:id' => 'crags#show', :as => 'crag' # Show

  get '/crags/:id/edit' => 'crags#edit', :as =>'crag_edit' # Edit
  post '/crags/:id' => 'crags#update' # Update

  delete '/crags/:id' => 'crags#destroy' # Delete
end

# C New Create
# R Index Show
# U Edit Update
# D Delete
