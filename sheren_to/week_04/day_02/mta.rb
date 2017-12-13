#mta
require 'pry'

# N = %w( Times Square, 34th, 28th, 23rd, Union Square, 8th )
# L = %w( 8th, 6th, Union Square, 3rd, 1st )
# 6 = %w( Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place )

line_N = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
line_L = [ "8th", "6th", "Union Square", "3rd", "1st" ]
line_6 = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]

#Note: same name station: 8th on line N and L, 28th for both N and 6, 23rd for both N and 6

#Try N-Line from Times Square to Union Square
start = "Times Square"
destination = "Union Square"

#what is start station and destinantion station
#search to see on which line start is, destination is
#search to see if both stations are on same line, if not to Union Square then to station

start_index_N = line_N.index(start).to_i
puts "The index of #{start} in array N is #{start_index_N}"

destination_index_N = line_N.index(destination).to_i
puts "The index of #{destination} in array N is #{destination_index_N}"

stations_to_travel = line_N[start_index_N..destination_index_N]
puts "Stations to travel: #{stations_to_travel}"

puts "Number of stations to travel: #{stations_to_travel.count}"


#def startLine
#def destination_line
# start_station 'Time Square', 'Union Square'
def start_station(start, destination)

 #start_line = prompt("Please select station travelling from: ").downcase

   case start_line

    when line_N.include?(start)
       puts "The starting station is on line N"
    when line_L.include?(start)

      puts "The starting station is on line L"
    when line_6.includes?(start)

      puts "The starting station is on line 6"
    end
  end

def destination_station(start, destination)

  #destination_line = prompt("Please select station travelling to: ").downcase

  case destination_line
    when line_N.include?(destination)

      puts "The destination station is on line N"
    when line_L.include?(destination)

      puts "The destination station is on line L"
    when line_6.includes?(destination)

      puts "The destination station is on line 6"
    end
  end

  start_station("Times Square", "Union Square")
  destination_station("Times Square", "Union Square")













  #
