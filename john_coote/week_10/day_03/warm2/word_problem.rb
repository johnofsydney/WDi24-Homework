require 'pry'

class WordProblem

  def initialize(question)
    @question = question
  end

  def calculator (string)
    @matches = string.match( /(\-?\d+) (\w+) (\-?\d+)( (\w+) (\-?\d+))?/ )
    @matches.nil? ? (raise ArgumentError, "xxxxxxx") : @matches


    num1 = @matches[1].to_i
    num2 = @matches[3].to_i
    operator = @matches[2]
    num3 = @matches[6].to_i
    op2 = @matches[5]

    # binding.pry

    if operator == "plus"
      sum = num1 + num2
    end

    if operator == "minus"
      sum = num1 - num2
    end

    if op2
      if op2 == "plus"
        sum = sum + num3
      end
      if op2 == "minus"
        sum = sum - num3
      end
    end

    return sum
  end

  # def reg (string)
  #   @matches = string.match( /(\d+) (\w+) (\d+)/ )
  # end

  def answer
    calculator(@question)
  end
end
