class GamesController < ApplicationController

def magic_form

end
def magic_8_ball_play
    @statement =['It is certain','It is decidedly so','It is decidedly so','Without a doubt','Yes definitely',' You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes','Reply hazy try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don not count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful']
end

def secret_form
  @num=[1,2,3,4,5,6,7,8,9,10]



end
def secret_number_play

  @machine_chose = rand(1..10)


end

  def rock_form


  end

  def rock_paper_scissors_play
    @machine_chose = ['rock','paper','scissor'].sample



  end
end
