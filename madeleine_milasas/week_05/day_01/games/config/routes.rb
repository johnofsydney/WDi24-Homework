Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic-8-ball' => 'ball#start'
  get '/magic-8-ball/answer' => 'ball#answer'

  get '/secret-number' => 'number#generate'
  get '/secret-number/play' => 'number#play'
  get '/secret-number/:id' => 'number#result'

  get '/rps' => 'rps#start'
  get '/rps/:throw' => 'rps#result'
end
