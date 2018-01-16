# Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string.

def hex(r,g,b)

  def single(dec)
    one = dec / 16
    two = dec % 16
    both = convert(one) + convert(two)
  end

  def convert(num)
    if num < 10
      return num.to_s
    end
    if num == 10
      return "A"
    elsif num == 11
      return "B"
    elsif num == 12
      return "C"
    elsif num == 13
      return "D"
    elsif num == 14
      return "E"
    elsif num == 15
      return "F"
    end
  end

  h = single(r) + single(g) + single(b)
  puts h

end

hex(255,100,9)
