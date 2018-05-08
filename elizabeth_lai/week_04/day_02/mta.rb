# MTA Lab
#
# Objectives:
#
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
#
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
#
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
require 'pry'

# LINES[:lineN]

LINES = {
  :lineN => ['Times Square', '34th', '28thN', '23rdN', 'Union Square', '8thN'],
  :lineL => ['8thL', '6th', 'Union Square', '3rd', '1st'],
  :line6 => ['Grand Central', '33rd', '28th6', '23rd6', 'Union Square', 'Astor Place']
}

########## single line
def single_line(start_line, end_line, start_stop, end_stop)
  start_position_1 = LINES[start_line].index(start_stop)
  end_position_1 = LINES[start_line].index(end_stop)
  total_stops_1 = end_position_1 - start_position_1
  journey_1 = LINES[start_line][(start_position_1 + 1)..end_position_1]
  puts "You must travel through the following stops on #{start_line}: #{journey_1}. There are #{total_stops_1} stops in total."
end

######### multi line
def multi_line(start_line, end_line, start_stop, end_stop)
  # finding journey on 1st line
  start_position_2 = LINES[start_line].index(start_stop)
  end_Union_2 = LINES[start_line].index('Union Square')
  num_stops_2 = end_Union_2 - start_position_2
  journey_2 = LINES[start_line][(start_position_2 + 1)..end_Union_2]
  # finding journey on 2nd line
  start_Union_3 = LINES[end_line].index('Union Square')
  end_position_3 = LINES[end_line].index(end_stop)
  num_stops_3 = end_position_3 - start_Union_3
  total_stops_3 = num_stops_2 + num_stops_3
  journey_3 = LINES[end_line][(start_Union_3 + 1)..end_position_3]
  puts "You must travel through the following stops on #{start_line}:#{journey_2}. Change at Union Square. Your journey continues on #{end_line} through the following stops: #{journey_3}. There are #{total_stops_3} stops in total."
end

######## other direction - single line
def other_way_single(start_line, end_line, start_stop, end_stop)
  reverse_journey = LINES[start_line].map { |l| "#{l}"}.reverse!
  start_position_4 = reverse_journey.index(start_stop)
  end_position_4 = reverse_journey.index(end_stop)
  total_stops_4 = end_position_4 - start_position_4
  journey_4 = reverse_journey[(start_position_4 + 1)..end_position_4]
  puts "You must travel through the following stops on #{start_line}: #{journey_4}.  There are #{total_stops_4} stops in total."
end

######### Multi Line: other direction start line, same drection end line
  def backwards_start_multi(start_line, end_line, start_stop, end_stop)
    # other direction - 1st line
    reverse_journey_5 = LINES[start_line].map { |l| "#{l}"}.reverse!
     start_position_5 = reverse_journey_5.index(start_stop)
     end_Union_5 = reverse_journey_5.index('Union Square')
     num_stops_5 = end_Union_5 - start_position_5
     journey_5 = reverse_journey_5[(start_position_5 + 1)..end_Union_5]
     # same direction - 2nd line
     start_Union_6 = LINES[end_line].index('Union Square')
      end_position_6 = LINES[end_line].index(end_stop)
      num_stops_6 = end_position_6 - start_Union_6
      total_stops_6 = num_stops_5 + num_stops_6
      journey_6 = LINES[end_line][(start_Union_6 + 1)..end_position_6]
      puts "You must travel through the following stops on #{start_line}: #{journey_5}. Change at Union Square. Your journey continues on #{end_line} through the following stops: #{journey_6}. There are #{total_stops_6} stops in total."
   end
######### Multi Line: same direction start line, other direction end line
  def backwards_end_multi(start_line, end_line, start_stop, end_stop)
    # same direction - 1st line
    start_position_7 = LINES[start_line].index(start_stop)
    end_Union_7 = LINES[start_line].index('Union Square')
    num_stops_7 = end_Union_7- start_position_7
    journey_7 = LINES[start_line][(start_position_7 + 1)..end_Union_7]
    # other direction - 2nd line
    reverse_journey_8 = LINES[end_line].map { |l| "#{l}"}.reverse!
    start_Union_8 = reverse_journey_8.index('Union Square')
    end_position_8 = reverse_journey_8.index(end_stop)
    num_stops_8 = end_position_8 - start_Union_8
    total_stops_8 = num_stops_7 + num_stops_8
    journey_8 = reverse_journey_8[(start_Union_8 + 1)..end_position_8]
    puts "You must travel through the following stops on #{start_line}: #{journey_7}. Change at Union Square. Your journey continues on #{end_line} through the following stops: #{journey_8}. There are #{total_stops_8} stops in total."
  end
########## Multi Line: other direction both lines
  def backwards_both_multi(start_line, end_line, start_stop, end_stop)
  #other direction - 1st line
    reverse_journey_9 = LINES[start_line].map { |l| "#{l}"}.reverse!
    start_position_9 = reverse_journey_9.index(start_stop)
    end_Union_9 = reverse_journey_9.index('Union Square')
    num_stops_9 = end_Union_9 - start_position_9
    journey_9 = reverse_journey_9[(start_position_9 + 1)..end_Union_9]
  # other direction - 2nd line
    reverse_journey_10 = LINES[end_line].map { |l| "#{l}"}.reverse!
    start_Union_10 = reverse_journey_10.index('Union Square')
    end_position_10 = reverse_journey_10.index(end_stop)
    num_stops_10 = end_position_10 - start_Union_10
    total_stops_10 = num_stops_9 + num_stops_10
    journey_10 = reverse_journey_10[(start_Union_10 + 1)..end_position_10]
    puts "You must travel through the following stops on #{start_line}: #{journey_9}. Change at Union Square. Your journey continues on #{end_line} through the following stops: #{journey_10}. There are #{total_stops_10} stops in total."
  end
########## plan trip function
def plan_trip(start_line, end_line, start_stop, end_stop)
  start_index = LINES[start_line].index(start_stop)
  end_index = LINES[end_line].index(end_stop)
  mid_index = LINES[start_line].index('Union Square')
  mid_index_2 = LINES[end_line].index('Union Square')

  if (start_line != end_line) && (mid_index < start_index) && (mid_index_2 > end_index)
    backwards_both_multi(start_line, end_line, start_stop, end_stop)
  elsif (start_line != end_line) && (mid_index < start_index)
     backwards_start_multi(start_line, end_line, start_stop, end_stop)
  elsif (start_line != end_line) && (mid_index_2 > end_index)
    backwards_end_multi(start_line, end_line, start_stop, end_stop)
  elsif (start_index > end_index)
    other_way_single(start_line, end_line, start_stop, end_stop)
  elsif (start_line != end_line)
    multi_line(start_line, end_line, start_stop, end_stop)
  else
    single_line(start_line, end_line, start_stop, end_stop)
  end
end


# plan_trip :lineL, :line6, '1st', '33rd' #backwards_both_multi
# plan_trip :lineN, :lineN, 'Times Square', 'Union Square' #single_line
# plan_trip :lineN, :lineL, '28thN', '3rd' #multi_line
# plan_trip :lineL, :line6, '1st', 'Astor Place' #backwards_start_multi
plan_trip :lineN, :line6, 'Times Square', 'Grand Central' #backwards_end_multi
# plan_trip :lineN, :lineN, 'Union Square', 'Times Square' #other_way_single


# backwards_both_multi(:lineL, :line6, '1st', '33rd')
# single_line(:lineN, 'Times Square', 'Union Square')
# multi_line(:lineN, :lineL, '28thN', '3rd')
# other_way_single(:lineN, :lineN, 'Union Square', 'Times Square')
# backwards_start_multi(:lineL, :line6, '1st', 'Astor Place')
# backwards_end_multi(:lineN, :line6, 'Times Square', 'Grand Central')

#to do
# change arrays to strings in answer
