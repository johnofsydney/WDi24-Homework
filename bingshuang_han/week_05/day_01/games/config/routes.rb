Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

 # Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer.
  get '/games/magic_8_ball'  => 'games#magic_form'
  get '/games/magic_8_ball/:string' => 'games#magic_8_ball_play'


  #Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.
  get '/games/secret_number'  => 'games#secret_form'
  get '/games/secret_number/:click' => 'games#secret_number_play'


  get '/games/rock_paper_scissors' => 'games#rock_form'
  get '/games/rock_paper_scissors/:throw' =>'games#rock_paper_scissors_play'




end
