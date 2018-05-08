# == Route Map
#
#        Prefix Verb   URI Pattern                   Controller#Action
#          root GET    /                             films#index
#     directors GET    /directors(.:format)          directors#index
#               POST   /directors(.:format)          directors#create
#  new_director GET    /directors/new(.:format)      directors#new
# edit_director GET    /directors/:id/edit(.:format) directors#edit
#      director GET    /directors/:id(.:format)      directors#show
#               PATCH  /directors/:id(.:format)      directors#update
#               PUT    /directors/:id(.:format)      directors#update
#               DELETE /directors/:id(.:format)      directors#destroy
#         films GET    /films(.:format)              films#index
#               POST   /films(.:format)              films#create
#      new_film GET    /films/new(.:format)          films#new
#     edit_film GET    /films/:id/edit(.:format)     films#edit
#          film GET    /films/:id(.:format)          films#show
#               PATCH  /films/:id(.:format)          films#update
#               PUT    /films/:id(.:format)          films#update
#               DELETE /films/:id(.:format)          films#destroy
#

Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'films#index'
  resources :directors
  resources :films
end
