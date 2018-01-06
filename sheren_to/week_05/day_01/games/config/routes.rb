Rails.application.routes.draw do

  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic8ball' => 'pages#magic8ball'
  get '/magic8ball/answer' => 'magic8ball#answer'

  get '/secret_number' => 'pages#secret_number'
  get '/secret_number/guess' => 'secret_number#guess'

  get '/rock_paper_scissors' => 'pages#rock_paper_scissors'
  get '/rock_paper_scissors/play' => 'rock_paper_scissors#play'

end
