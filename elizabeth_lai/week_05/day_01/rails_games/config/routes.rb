Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic8/form' => 'magic8#form'
  get '/magic8/answer' => 'magic8#answer'

  get '/secretnumber/form' => 'secretnumber#form'
  get '/secretnumber/answer' => 'secretnumber#answer'

  get '/rps/form'
  # get '/rock_paper_scissors/:throw' => games#rock_paper_scissors_play

end
