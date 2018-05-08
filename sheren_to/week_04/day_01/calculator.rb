#calculator

# Calculator
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

def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end

# (n -n.round).abs < 0.0000000000001
#n.round

def prompt(message)
  print message
  gets.chomp
end

def addition(x, y)
  answer = x + y
  puts "The answer is #{answer}"
end

def subtract(x, y)
  answer = x - y
  puts "The answer is #{answer}"
end

def multiply(x, y)
  answer = x * y
  puts "The answer is #{answer}"
end

def divide(x, y)
  answer = x / y
  puts "The answer is #{answer}"
end

def exponential(x, y)
  answer = x ** y
  puts "The answer is #{answer}"
end

def square_root(x)
  answer = Math.sqrt(x)
  puts "The answer is #{answer}"
end

def basic_calculator

  puts "(+) - addition"
  puts "(-) - subtract"
  puts "(*) - multiply"
  puts "(/) - divide"

  menu_choice = prompt("Please select operator: ").downcase

  case menu_choice
  when "+"
    print "Please enter first number: "
    x = gets.to_i
    print "Please enter second number: "
    y = gets.to_i
    addition(x, y)

  when "-"
    print "Please enter first number: "
    x = gets.to_i
    print "Please enter second number: "
    y = gets.to_i
    subtract(x, y)

  when "*"
    print "Please enter first number: "
    x = gets.to_i
    print "Please enter second number: "
    y = gets.to_i
    multiply(x, y)

  when "/"
    print "Please enter first number: "
    x = gets.to_i
    print "Please enter second number: "
    y = gets.to_i
    divide(x, y)
  end


end



def advanced_calculator

  puts "(+) - addition"
  puts "(-) - subtract"
  puts "(*) - multiply"
  puts "(/) - divide"
  puts "(**) - exponential"
  puts "(sqrt) - square_root"

menu_choice = prompt("Please select operator: ").downcase

  case menu_choice
  when "+"
    print "Please enter first number: "
    x = gets.to_i
    print "Please enter second number: "
    y = gets.to_i
    addition(x, y)

  when "-"
    print "Please enter first number: "
    x = gets.to_i
    print "Please enter second number: "
    y = gets.to_i
    subtract(x, y)

  when "*"
    print "Please enter first number: "
    x = gets.to_i
    print "Please enter second number: "
    y = gets.to_i
    multiply(x, y)

  when "/"
    print "Please enter first number: "
    x = gets.to_i
    print "Please enter second number: "
    y = gets.to_i
    divide(x, y)

  when "**"
    print "Please enter base number: "
    x = gets.to_i
    print "Please enter exponents number: " #exponent??? need to check
    y = gets.to_i
    exponential(x, y)

  when "sqrt"
    print "Please enter number: "
    x = gets.to_i
    square_root(x)
  end

end

#############################################################################

main_menu
menu_choice = prompt ("please enter your selection: ").downcase

until menu_choice == "q"

  case menu_choice

  when 'b'
    basic_calculator

  when 'a'
    advanced_calculator

  else
    puts "invalid selection"

  end

  main_menu
  menu_choice = prompt ("please enter your selection: ").downcase
end

puts "thank you for using this terrible calculator"
