require 'pry'

puts "Hello Ruby"

def reverse(string)
  puts string
  rev = []

  for l in string.split('') do
    rev.unshift(l)
  end

  puts rev.join('')
end

# binding.pry

reverse("palindrome")
