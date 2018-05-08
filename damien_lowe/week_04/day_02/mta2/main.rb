# MTA WITH RUBY!!
require "pry"
#Array of the different lines

NLINE = ["Times", "34th", "27th", "22nd", "Union", "8th"]
ELINE = ["7th", "6th", "Union", "3rd", "1st"]
WLINE = ["Central", "33rd", "28th", "23rd", "Union", "Astor"]




def single_line (line, starts, ends)

  # station_index(line, starts, ends)
  starts_index = line.find_index(starts)
  ends_index = line.find_index(ends)

  if (ends_index < starts_index)
    line.reverse!
    starts_index = line.find_index(starts)
    ends_index = line.find_index(ends)
  end

  stations = line[starts_index .. ends_index]
  puts stations
  return stations
end

# binding.pry
def double_line (line1, starts, line2, ends)

  single_line(line1, starts, "Union")
  single_line(line2, "Union", ends)

end
#
# single_line(ELINE, "7th", "3rd")
# double_line(NLINE ,"Times", WLINE, "Central")
