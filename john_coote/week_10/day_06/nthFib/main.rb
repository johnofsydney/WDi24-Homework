puts "hello ruby"



series = [1,1,2]
puts series


print "enter number: "
number = gets.chomp.to_i
puts number

while series.length < number do
  series.push series.last(2).sum
end

puts "series #{series}"
puts "length: #{series.length}"
puts "last: #{series.last}"
puts "max: #{series.max}"
