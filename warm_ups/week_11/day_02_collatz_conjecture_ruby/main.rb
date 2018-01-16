require 'pry'

class Collatz

  def initialize num
    @collection = [ num ]
    # calculate_collection( num )
    # generate_collection
  end

  # def calculate_collection num
  #   if @collection.last > 1
  #     @collection.push( num.even? ? (num / 2) : (( num * 3 ) + 1) )
  #     calculate_collection( @collection.last )
  #   end
  # end

  def generate_collection
    while @collection.last > 1
      if @collection.last.even?
        next_step = @collection.last / 2
      else
        next_step = @collection.last * 3 + 1
      end
      @collection.push( next_step )
    end
  end

  def answer
    puts "The total steps were: #{ @collection.join(', ') }"
    puts "The program ran #{ @collection.length } times."
  end

end

# Collatz.new(19).answer


arr = [ 19 ]

arr.push( arr.last.even? ? (arr.last/2) : (( arr.last * 3 ) + 1 ) ) until arr.last == 1

puts "Ran #{ arr.length } times, the process was:\n > #{ arr.join(', ') }"
