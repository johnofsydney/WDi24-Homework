require 'pry'


print "what is your weight in kg's?  "
weight = gets.to_i

print "what is your height in meteres and cm? eg 1.63  "
height = gets.to_f

calc_one = weight / height
bmi = (calc_one / height).round
puts "your bmi is #{ bmi }"

  if bmi >= 30
    puts "stop eating!!!"
  elsif bmi >= 25 && bmi <= 30
    puts "could do with one less chocolate a day"
  elsif bmi >= 18.5 && bmi <= 25
    puts "nice work champ"
  else
    puts "you can eat carbs now"
  end
