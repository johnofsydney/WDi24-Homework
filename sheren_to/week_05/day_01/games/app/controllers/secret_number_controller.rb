
class SecretNumberController < ApplicationController


def guess

  @number = (0..10).to_a.sample
  #puts "The secret number is #{number}."

    @random_number = params[:random_number].to_i

    # if @random_number == "#{number}"
    #   puts "You guessed it!"
    # else @random_number != "#{number}"
    #   puts "Try again."
    #
    # end
  end
end
