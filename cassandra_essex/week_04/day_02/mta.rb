require 'pry'

nLine = ['Times Square', '34th', 'twenty8th', 'twentythird', 'Union Square','8th']
# puts nLine
nLineReverse = nLine.reverse
# puts nLineReverse

print "where are you boarding the train?  "
start_station = gets.chomp
start_index = nLine.index start_station

print "where are you existing the train?  "
exit_station = gets.chomp
exit_index = nLine.index exit_station

station_stops = exit_index - start_index
puts "You will be travelling through #{ station_stops } stations"

stations_stopped = nLine[ start_index..exit_index ]

# binding.pry
puts "You will be travelling through the following stations #{stations_stopped}"




# const planTrip = function (startStation, stopStation) {
#   let startIndex = nLine.indexOf(startStation);
#   let stopIndex = nLine.indexOf(stopStation);
#   let noOfStops = (stopIndex - startIndex);
#   //to access the stops between the start and end of the journey and put them into there own array
#   let tripArray = [];
#     tripArray.push(nLine[i]);
#   }
#   console.log(`Your trip is through ${ tripArray }.`);
#   console.log(`There will be ${noOfStops} stops in total.`);
# };
#
# planTrip ('Union Square','Times Square');
