Rails.application.routes.draw do
  root :to => 'fonts#index'
  resources :fonts
  resources :categories
end
