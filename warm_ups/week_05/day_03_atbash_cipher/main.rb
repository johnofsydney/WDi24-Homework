require 'pry'

class Atbash

  # the initialize method will run as soon as the instance of the class is created.
  def initialize input_string

    # giving the input greater scope with the @ symbol.
    @input_string = input_string
    # calling the encode method.
    encode

  end

  # The encode method will both encode and decode.
  

end

# creating an instance of the class.
coded = Atbash.new( 'TEST' )
decoded = Atbash.new( 'gvhg' )
