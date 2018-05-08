require 'pry'


class Roman

  def initialize num

    @num = num

  end

  def numbers
    {
      1000 => "M",
      900 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
      90 => "XC",
      50 => "L",
      40 => "XL",
      10 => "X",
      9 => "IX",
      5 => "V",
      4 => "IV",
      1 => "I"
    }
  end

  def to_roman
    output = ""
    numbers.each do | key, value |
      while @num >= key

        output << value
        @num -= key

      end
    end
    output
  end


end

n1 = Roman.new(1990)

p n1.to_roman
