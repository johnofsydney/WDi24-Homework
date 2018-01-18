
def fib_memo(n)
  fibs = [1, 1]

  def fib_r(num, arr)
    return arr[-1] if num <=2
    arr << arr[-1] + arr[-2]
    num -= 1
    fib_r(num, arr)
  end

  fib_r(n, fibs)
end


require 'pry'
binding.pry
