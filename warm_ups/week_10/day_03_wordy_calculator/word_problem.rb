require 'pry'

class WordProblem

  def initialize question
    # call the get_match function so that we can pass the question through as an argument
    get_matches( question )
  end

  def get_matches str

    # using regex to select the digits and operators

    # here are the examples of how we would build it out for each test.
    # /(\d)/
    # => #<MatchData "1" 1:"1">
    #
    # /(\d) (\w+)/
    # # match a full word regardless of length
    # => #<MatchData "3 plus" 1:"3" 2:"plus">
    #
    # /(\d) (\w+) (\d)/
    # # will match a second digit after the word
    # => #<MatchData "3 plus 4" 1:"3" 2:"plus" 3:"4">
    #
    # /(\d+) (\w+) (\d+)/
    # # will match multiple numbers
    # => #<MatchData "123 plus 45678" 1:"123" 2:"plus" 3:"45678">
    #
    # /(-?\d) (\w+) (\d)/
    # # will match if there is a negative
    # => #<MatchData "-3 plus 4" 1:"-3" 2:"plus" 3:"4">

    @matches = str.match( /(-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?/ )

    # If there is nothing in the @matches variable we know that the regex hasn't found a match and we can run an error.
    @matches.nil? ? ( raise ArgumentError, "That's too complicated!" ) : @matches
  end

  # Our method takes in three arguments so we can sent the matches from the regex.
  def calculator num1, operator, num2
    # Our 'if' statement checks to see if we have found the string of plus or minus and uses the according operator.
    if operator == "plus"
      return num1 + num2
    else
      return num1 - num2
    end
  end

  def answer
    # We need to take into account that we can have multiple operators in our string. If we send the first set of matches and save the returned result into a variable we can pass that variable through as the first argument when we call the argument again.
    sum = calculator( @matches[1].to_i, @matches[2], @matches[3].to_i )
    if @matches[4]
      sum = calculator( sum, @matches[5], @matches[6].to_i )
    end
    # Our method doesn't have implicit return so we need to return the sum.
    sum
  end

end








































# require 'pry'
#
# class WordProblem
#
#   def initialize question
#     get_matches( question )
#     @question = question
#   end
#
#   def get_matches str
#     @matches = str.match( /(-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?/ )
#     binding.pry
#
#     @matches.nil? ? ( raise ArgumentError, "That's too complicated!" ) : @matches
#   end
#
#   def calculator num1, operator, num2
#     if operator == "plus"
#       return num1 + num2
#     else
#       return num1 - num2
#     end
#   end
#
#   def answer
#     sum = calculator(@matches[1].to_i, @matches[2], @matches[3].to_i)
#     if @matches[4]
#       sum = calculator( sum, @matches[5], @matches[6].to_i )
#     end
#     sum
#   end
#
# end
