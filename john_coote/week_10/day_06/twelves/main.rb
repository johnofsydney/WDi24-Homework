puts "hrllo ruby"

def tables(num)
  for i in (1..num) do
    for j in (1..num) do
      puts "#{j} x #{i} = #{i * j}"
    end
  end
end

tables 12
