arr = []

ARGF.each do |line|
  num = line.chomp.to_i
  arr.push(num)
end

puts arr.sum
