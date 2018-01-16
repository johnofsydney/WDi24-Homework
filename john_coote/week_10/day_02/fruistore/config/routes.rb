# == Route Map
#
#     Prefix Verb  URI Pattern                Controller#Action
#     fruits GET   /fruits(.:format)          fruits#index
#            POST  /fruits(.:format)          fruits#create
#  new_fruit GET   /fruits/new(.:format)      fruits#new
# edit_fruit GET   /fruits/:id/edit(.:format) fruits#edit
#      fruit GET   /fruits/:id(.:format)      fruits#show
#            PATCH /fruits/:id(.:format)      fruits#update
#            PUT   /fruits/:id(.:format)      fruits#update
# 

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :fruits, :only => [:index, :new, :create, :edit, :update, :show]
end
