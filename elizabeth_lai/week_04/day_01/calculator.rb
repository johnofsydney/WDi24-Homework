# Calculator
#
# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Bonus
#
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

require 'pry'

def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end

def prompt(message)
  print message
  gets.chomp # Implicit return
end

def basic_calculator
  puts "You are now using the basic calculator. "
end

# def get_numbers
#   num_A = prompt('Please enter your first number: ').chomp.to_i
#   num_B = prompt('Please enter your next number: ').chomp.to_i
#   binding.pry
#   calculation
# end

def operations
  puts "(a) - addition (+)"
  puts "(s) - subtraction (-)"
  puts "(m) - multiplication (*)"
  puts "(d) - division (/)"
end

def calculation(operator, a, b)
  if operator == 'a'
      puts a + b
    elsif operator == 's'
      puts a - b
    elsif operator == 'm'
      puts a * b
    elsif operator == 'd'
      puts a / b
    else
      puts 'This wont work'
    end
end


################################################################################

main_menu
menu_choice = prompt('Please enter your selection: ').downcase

until menu_choice == 'q'
  # Show the appropriate calculator
  case menu_choice
  when 'b'
    operations
    sign = prompt('Please select what operation you would like to perform:')
    num_A = prompt('Please enter your first number: ').chomp.to_i
    num_B = prompt('Please enter your next number: ').chomp.to_i
    answer = calculation(sign, num_A, num_B)
  when 'a'
    advanced_calculator
  else
    puts "Invalid selection"
  end

# answer = calculate_answer(current_calculation, first_number, second_number)
# puts answer
  main_menu
  menu_choice = prompt('Please enter your selection: ').downcase
end

puts "Thank you for using this terrible calculator."
