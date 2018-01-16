Rails.application.routes.draw do

  root :to => 'pages#index'
  get 'hamldemo' => 'pages#hamldemo'
end
