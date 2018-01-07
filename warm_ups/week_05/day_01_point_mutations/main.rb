

# Write a program that can calculate the Hamming difference between two DNA strands.
require('pry')

# Starting strings
str1 = "GAGCCTACTAACGGGAT"
str2 = "CATCGTAATGACGGCCT"

def ham_count( first_string, second_string )

  # Immediately split our strings into arrays we can compare.
  first_string = first_string.split('')
  second_string = second_string.split('')
  difference = 0


  # each_with_index is just an each loop which gives us access to an index value.
  # I want this so I can directly compare the arrays I'm looping through.
  first_string.each_with_index do | letter, i |

    # If this index in either array isn't exactly the same, add to our counter
    difference += 1 if first_string[i] != second_string[i]
  end


  # Lastly -- use our impolicit return.
  difference

end

p ham_count(str1, str2)


# ---------------------------------------------------------
#  Class approach
# ---------------------------------------------------------

class HamCount

  # Initialize runs when we create this class, this is where we tell our class:
  # What number of arguments to expect.
  # Any methods or data changes we want to run immediately.

  # In this case, I expect 2 arguments, and I immediately make them into instance variables, and split them.
  def initialize( str1, str2 )
    @str1 = str1.split('')
    @str2 = str2.split('')
  end

  # This method does not need to take arguments, I have the instance variables from initialize.
  def difference_count
    difference = 0
    @str1.each_with_index do | letter, i |
      difference += 1 if @str1[i] != @str2[i]
    end
    difference
  end
end

# Classes are initialized by calling .new, which immediately triggers the initialize.
hammed_class = HamCount.new( str1, str2 )

# Saving the class in a variable gives me access to all of the methods within the class.
p hammed_class.difference_count

# ---------------------------------------------------------
# Javascript & classes
# ---------------------------------------------------------

# If you are finding classes difficult, bear in mind, you've seen this pattern before.

# Javascript constructors work much the same way.

# var Dog = function( name, breed, age ){
#   this.name = name;
#   this.breed = breed;
#   this.age = age;
#   this.bark = function(){
#     console.log("Bork.")
#   };
#   this.describe = function(){
#     console.log( "This dog is " + age + " years old. Its name is " + name + " and they are a " + breed + "." );
#   };
# }


# Again, the 'new' key word initializes, and we've saved it in a variable
# var spot = new Dog("Spot", "dalmation", 3)

# We still get access to any functions within our class.
# spot.bark();
# => "Bork."

# And any variables passed to it on creation.
# spot.describe();
# => "This dog is 3 years old. Its name is Spot and they are a dalmation."

# The benefit of this is that it is entirely modular. We can make any number of unique dogs.
# mitsy = new Dog("Mitsy", "Border collie", 2)
# muttley = new Dog("Muttley", "Kelpie", 9)
