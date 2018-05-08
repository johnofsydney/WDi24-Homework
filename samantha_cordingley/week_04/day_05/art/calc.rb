require 'pry'

def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end

def prompt (message)
  print message
  gets.chomp      #implicitly returned because its the last line of the function
end


# ###############################################################################

# # Calculator functionality
# # Calculator should be able to do basic arithmetic (+,-, *, /)


### GET TYPE ###

def basic_calculator_type
  print "What would you like to do? Type 1 to add, 2 to subtract, 3 to multiply or 4 to divide: "
  selection = gets.to_i
  # puts "You chose #{selection}"
  if selection == 1
    "add"
  elsif selection == 2
    "subtract"
  elsif selection == 3
    "multiply"
  elsif selection == 4
    "divide"
  else
    "error"
  end
end


### DETERMINE WHAT SUM TO PREFORM ###

def sum (operator, a, b)
  if operator == "add"
    a + b
  elsif operator == "subtract"
    a - b
  elsif operator == "multiply"
    a * b
  elsif operator == "divide"
    a / b
  end
end


################################################################################

# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

### GET TYPE ###

def advanced_calculator_type
  print "What would you like to do? Type 1 to find exponents or 2 to find the square root of a number: "
  selection = gets.to_i
  # puts "You chose #{selection}"
  if selection == 1
    "exponents"
  elsif selection == 2
    "square root"
  else
    "error"
  end
end

### DETERMINE WHAT SUM TO PREFORM ###

def sum (operator, a, b)
  if operator == "exponents"
    a ** b
  elsif operator == "square root"
      Math.sqrt(a)
  end
end

  ################################################################################


  main_menu
  menu_choice = prompt('Please enter your selection: ').downcase
  puts "You chose: #{menu_choice}"

  until menu_choice == 'q'
    # show the appropriate calculator
    case menu_choice
    when 'b'
        current_type = basic_calculator_type
        puts "What is the first number you would like to #{current_type}: "
        first_number = gets.to_i
        puts "What is the second number you would like to #{current_type}: "
        second_number = gets.to_i
        answer = sum(current_type, first_number, second_number)
          puts "The answer is #{answer}"

    when 'a'
      current_type = advanced_calculator_type
      puts "What is the first number you would like to #{current_type}: "
      first_number = gets.to_i
      puts "What is the second number (leave blank if using the Square Root function): "
      second_number = gets.to_i
      answer = sum(current_type, first_number, second_number)
      puts "The answer is #{answer}"
    end
    # show the menu again
   main_menu
   # get the menu choice again
  menu_choice = prompt ('Please enter your selection: ').downcase
  end

  puts "Thank you for using this terrible calculator."
