# == Route Map
#
#     Prefix Verb   URI Pattern                Controller#Action
#     actors GET    /actors(.:format)          actors#index
#            POST   /actors(.:format)          actors#create
#  new_actor GET    /actors/new(.:format)      actors#new
# edit_actor GET    /actors/:id/edit(.:format) actors#edit
#      actor GET    /actors/:id(.:format)      actors#show
#            PATCH  /actors/:id(.:format)      actors#update
#            PUT    /actors/:id(.:format)      actors#update
#            DELETE /actors/:id(.:format)      actors#destroy
#     movies GET    /movies(.:format)          movies#index
#            POST   /movies(.:format)          movies#create
#  new_movie GET    /movies/new(.:format)      movies#new
# edit_movie GET    /movies/:id/edit(.:format) movies#edit
#      movie GET    /movies/:id(.:format)      movies#show
#            PATCH  /movies/:id(.:format)      movies#update
#            PUT    /movies/:id(.:format)      movies#update
#            DELETE /movies/:id(.:format)      movies#destroy
#

Rails.application.routes.draw do
  root :to => "pages#home"
  resources :actors
  resources :movies
end
