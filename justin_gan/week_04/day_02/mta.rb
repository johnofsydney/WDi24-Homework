require 'pry'

def plan_trip( start_line, start_station, end_line, end_station, subway )
  start_index = get_station_index( subway[ start_line ], start_station )
  end_index = get_station_index( subway[ end_line ], end_station )

  # validate: is user at their destination?
  if start_station == end_station
    p "You're already at #{ end_station } station."
  # one leg journey
  elsif start_line == end_line
    journey_info = get_journey_leg( subway[ start_line ], start_index, end_index, start_station, end_station )
  # multi-leg journey
  else
    # find intersecting station
    intersect = (subway[ start_line ] & subway[ end_line ]).first
    intersect_index_start_line = get_station_index( subway[ start_line ], intersect )
    intersect_index_end_line = get_station_index( subway[ end_line ], intersect )

    # validate: is user at intersect?
    if start_index == intersect_index_start_line
      p "Go to the #{ end_line } line to get your train."
    else
      first_leg = get_journey_leg( subway[ start_line ], start_index, intersect_index_start_line, start_station, end_station )
      p "You must travel through the following stops on the #{ start_line } line: #{ first_leg.join(", ") }."
      p "Change at #{ intersect }."
    end
    second_leg = get_journey_leg( subway[ end_line ], intersect_index_end_line, end_index, start_station, end_station )
    p "Your journey continues through the following stops on the #{ end_line } line: #{ second_leg.join(", ") }."
  end
end

def get_station_index( line, station )
  line.index( station )
end

def get_journey_leg( line, start_index, end_index, start_station, end_station )
  if start_index < end_index
    travel_east( line, start_index, end_index )
  else
    travel_west( line, start_index, end_index )
  end
end

def travel_east( line, start_index, end_index )
  passed_stations = line[ (start_index + 1)..end_index ] # ignore starting station
end

def travel_west( line, start_index, end_index )
  # end index is smaller if travelling west; reverse to get correct order
  passed_stations = line[ (end_index)..(start_index - 1) ].reverse # ignore starting station
end

SUBWAY = {
  :N => [ "Times Square", "34th", "28th (N)", "23rd (N)", "Union Square", "8th (N)"],
  :L => [ "8th", "6th", "Union Square", "3rd", '1st' ],
  6 => [ "Grand Central", "33rd", "28th (6)", "23rd (6)", "Union Square", "Astor Place" ]
  :C => [ "W 4th", "8th", "23rd (C)", "34th (C)" ]
}


plan_trip :N, '34th', 6, '28th (6)', SUBWAY
plan_trip :N, 'Union Square', 6, '28th (6)', SUBWAY
# plan_trip :N, '34th', :N, 'Union Square'
plan_trip :N, '28th (N)', :N, '28th (N)', SUBWAY
# plan_trip :N, '8th', :N, '23rd'
# plan_trip :L, '8th', :L, '3rd'
# plan_trip :L, '6th', :L, '6th'
# plan_trip :L, '1st', :L, 'Union Square'
# plan_trip 6, '33rd', 6, 'Astor Place'
# plan_trip 6, '23rd', 6, '23rd'
# plan_trip 6, 'Union Square', 6, '33rd'
