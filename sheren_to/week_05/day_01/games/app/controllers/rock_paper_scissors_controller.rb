
class RockPaperScissorsController < ApplicationController



    def play

      @challenger = ["rock", "paper", "scissors"].sample

      @player = params[:player]

      #   if @player == rock && @challenger == scissors
      #     puts "You win"
      #   elsif @player == rock && @challenger == rock
      #     puts "No one wins"
      #   else
      #     puts "You lose"
      # end
      #
      #   if @player == paper && @challenger == rock
      #     puts "You win"
      #   elsif @player == paper && @challenger == paper
      #     puts "No one wins"
      #   else
      #     puts "You lose"
      # end
      #
      # if @player == scissors && @challenger == paper
      #   puts "You win"
      # elsif @player == scissors && @challenger == scissors
      #   puts "No one wins"
      # else
      #   puts "You lose"
      # end

    end
end
