Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/games/eight' => 'pages#eight'

  get '/games/answer' => 'pages#answer'
end
