require 'pry'
# Set arrays of the different lines

network = {
  N => ["Times", "34th", "28th", "23rd", "Union Square", "8th"],
  L => ["8th", "6th", "Union Square", "3rd", "1st"],
  SIX => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

# N = ["Times", "34th", "28th", "23rd", "Union Square", "8th"]
# L = ["8th", "6th", "Union Square", "3rd", "1st"]
# SIX = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]


def single_trip (line, start_station, finish_station)

  first_position = line.index start_station
  last_position = line.index finish_station

  if last_position < first_position
    line.reverse!
    first_position = line.index start_station
    last_position = line.index finish_station
  end
  hop = line[first_position .. last_position]
  # puts hop
  return hop

end


def double_trip (start_line, start_station, finish_line, finish_station)

    hop1 = single_trip(start_line, start_station, "Union Square")
    hop2 = single_trip(finish_line, "Union Square", finish_station)
    hop1 + hop2

end






# p single_trip(N, "Times", "Union Square")
# p single_trip(L, "Union Square", "8th")

p double_trip(network[:N], "Times", network[:SIX], "Grand Central")
p double_trip(network[:N], network[:N][0], network[:SIX], network[:SIX].last)

# binding.pry
