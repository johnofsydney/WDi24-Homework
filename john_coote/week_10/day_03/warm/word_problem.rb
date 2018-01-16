require 'pry'

class WordProblem

  def initialize(question)
    @question=question
  end

  def get_operator
    @operator = @question
  end

  def answer
    bob = get_operator
    return @operator
  end
end

binding.pry

# # attr_accessor :name, :instrument, :vice
#
# def initialize(name='Somebody Marx', instrument=nil, vice=nil)
#   @name = name
#   @instrument = instrument
#   @vice = vice
# end
