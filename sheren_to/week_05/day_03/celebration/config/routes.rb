# == Route Map
#
#       Prefix Verb   URI Pattern                Controller#Action
# events_index GET    /events/index(.:format)    events#index
#   events_new GET    /events/new(.:format)      events#new
#  events_edit GET    /events/edit(.:format)     events#edit
#  events_show GET    /events/show(.:format)     events#show
# months_index GET    /months/index(.:format)    months#index
#   months_new GET    /months/new(.:format)      months#new
#  months_edit GET    /months/edit(.:format)     months#edit
#  months_show GET    /months/show(.:format)     months#show
#       months GET    /months(.:format)          months#index
#              POST   /months(.:format)          months#create
#    new_month GET    /months/new(.:format)      months#new
#   edit_month GET    /months/:id/edit(.:format) months#edit
#        month GET    /months/:id(.:format)      months#show
#              PATCH  /months/:id(.:format)      months#update
#              PUT    /months/:id(.:format)      months#update
#              DELETE /months/:id(.:format)      months#destroy
#       events GET    /events(.:format)          events#index
#              POST   /events(.:format)          events#create
#    new_event GET    /events/new(.:format)      events#new
#   edit_event GET    /events/:id/edit(.:format) events#edit
#        event GET    /events/:id(.:format)      events#show
#              PATCH  /events/:id(.:format)      events#update
#              PUT    /events/:id(.:format)      events#update
#              DELETE /events/:id(.:format)      events#destroy
#


Rails.application.routes.draw do

  root :to => 'events#index'
  resources :months
  resources :events

end
