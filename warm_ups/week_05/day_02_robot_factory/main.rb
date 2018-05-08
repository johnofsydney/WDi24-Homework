require 'pry'

class Robot

  # The initialize method will run as soon as an instance of the class has been created. it will store the variables that have been defined.
  def initialize

    @instruction_count = 0
    @name = make_name

    # we capture the current time with Time class.
    @creation_date = Time.now
    @boot_date = Time.now

  end

  # This function will create the random name for the robot.
  def make_name

    # incrementing the count for each action the robot makes
    @instruction_count += 1

    # creating an array with an alphabetical range from A to Z then 'samples' two random letters
    letter_pool = ("A".."Z").to_a.sample(2)
    # creating an array with a numerical range from 0 to 9 then 'samples' three random letters
    number_pool = (0..9).to_a.sample(3)

    # Concatinating the two arrays together then stripping it from the array.
    join = letter_pool.concat( number_pool ).join

  end

  # this method will be able to call the name of the robot without resetting the name.
  def name

    @instruction_count += 1
    @name

  end

  def reset

    @instruction_count += 1
    @name = make_name

    # resetting the @boot_date variable
    @boot_date = Time.now

  end

  # Timers - Give me the times since creation and last boot.
  def timer

    @instruction_count += 1

    p "Unit has been active for #{ Time.now - @creation_date } seconds. #{ Time.now - @boot_date } since last boot cycle."

  end

end

# creating a new instance of the Robot class.
# Because we are using a class, we require the 'new' keyword.
p1 = Robot.new

binding.pry

p p1.make_name
