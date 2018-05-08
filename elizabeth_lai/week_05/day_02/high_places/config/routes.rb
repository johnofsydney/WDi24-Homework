Rails.application.routes.draw do
  root :to => 'parks#index'
  get '/parks' => 'parks#index'
  get '/parks/new' => 'parks#new'
  post '/parks' => 'parks#create'
  get 'parks/:id' => 'parks#profile', :as => 'park'
  get 'parks/:id/edit' => 'parks#edit', :as => 'park_edit'
  post '/parks/:id' => 'parks#update'
  delete '/parks/:id' => 'parks#destroy'
end
