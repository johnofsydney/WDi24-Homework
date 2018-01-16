

def print_odds(num)
  for x in (1..num) do
    puts ((x % 2 != 0)? x : "")
  end
end

print_odds (99)
