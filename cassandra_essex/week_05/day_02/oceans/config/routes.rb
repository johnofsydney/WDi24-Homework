Rails.application.routes.draw do
root :to => 'ocean#index'
get '/oceans' => 'ocean#index' # Shows all the oceans
get '/oceans/new' => 'ocean#new'
get '/oceans/:id' => 'ocean#show', :as => 'ocean'
post '/oceans' => 'ocean#create'
get '/oceans/:id/edit' => 'ocean#edit', :as => 'ocean_edit'
post '/oceans/:id' => 'ocean#update'
delete '/oceans/:id' => 'ocean#destroy'

end
