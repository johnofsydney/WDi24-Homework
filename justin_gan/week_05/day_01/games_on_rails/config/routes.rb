Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic8ball' => 'magic8ball#question'
  get '/magic8ball/answer' => 'magic8ball#answer'

  get '/secret_number' => 'secret_number#guess'
  get '/secret_number/:guess' => 'secret_number#validate'

  get '/rock_paper_scissors' => 'rock_paper_scissors#throw'
  get '/rock_paper_scissors/:throw' => 'rock_paper_scissors#validate'
end
