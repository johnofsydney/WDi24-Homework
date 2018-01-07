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
  def encode

    # create a variable to hold the encoded string
    output = ""
    # creating an array of the alphabet to find the indexs of the letters.
    alphabet = ( "a".."z" ).to_a

    # changing the input string to downcase then splitting it into individual characters in an array then looping through the array to gain access to each letter.
    @input_string.downcase.split('').each do | letter |

      # finding the index of the letter within the alphabet array
      index = alphabet.index( letter )

      # using that index to find the corresponding letter in the reversed array.
      output << alphabet.reverse[ index ]

    end
    # return the output.
    p output
  end

end

# creating an instance of the class.
coded = Atbash.new( 'TEST' )
decoded = Atbash.new( 'gvhg' )
