require 'pry'

puts "hello world"

def s1(num)
  puts "sum of sequence in s1 format with #{num} numbers: #{ num % 2}"
end

s1(4)
s1(5)


def s2(num)
  sum = 0
  num_new = num
  while num_new > 0 do
    sum = sum + num_new
    num_new = num_new - 1
  end
  puts "sum of sequence in s2 format with #{num} numbers: #{ sum }"
end

s2(3)
s2(10)
