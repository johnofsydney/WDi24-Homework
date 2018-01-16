

def fib(n, a, b)

  if n > 0
    a, b = b, a + b
    puts "#{n}, #{a}, #{b}"
    fib(n - 1, a, b )

  end

  b

end


puts (fib(6, 1, 1))
