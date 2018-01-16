require 'pry'

class Phone

  def initialize(messyNumber)
    cleaner(messyNumber)
  end

  def cleaner(messyNumber)
    niceNumber = messyNumber
    @niceNumber = messyNumber.gsub(/\D+/, "")

    l = @niceNumber.length

    # binding.pry
    if l == 11
      # binding.pry
      if @niceNumber[0] == "1"
        @niceNumber[0] = ""
      else
        @niceNumber = "0000000000"
      end
    end

    # binding.pry
    if l == 9
      @niceNumber = "0000000000"
    end

  end




  def number
    return @niceNumber
  end


end
