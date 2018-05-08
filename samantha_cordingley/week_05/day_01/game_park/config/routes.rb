Rails.application.routes.draw do
root :to => 'pages#home'
get '/home' => 'pages#home'

get '/magic' => 'magic#form'
get '/magic/fortune' => 'magic#fortune'

get '/secret' => 'secret#form'
get '/secret/answer' => 'secret#answer'

get '/rockps' => 'rockps#form'
get '/rockps/outcome' => 'rockps#outcome'
end
