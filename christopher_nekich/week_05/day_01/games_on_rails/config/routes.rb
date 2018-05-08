Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/eightball' => 'eight_ball#game'
  get '/eightball/results' => 'eight_ball#result'

  get '/secretnumber' => 'secret_number#game'
  get '/secretnumber/:num' => 'secret_number#result'

  get '/rockpaperscissors' => 'rps#game'
  get '/rockpaperscissors/:throw' => 'rps#play'
end
