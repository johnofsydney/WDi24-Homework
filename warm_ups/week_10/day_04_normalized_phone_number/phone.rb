require 'pry'

class Phone

  def initialize num
    @num = num.gsub( /\W+/, "")
    get_matches
  end

  def validate
    # @num.start_with("1")
    if @num.length == 11 && @num[0] == "1"
      @num = @num[1..10]
    elsif @num.length != 10
      @num = "0000000000"
    end
    @num
  end

  def get_matches
    @matches = @num.match( /(\d{3})(\d{3})(\d{4})/)
  end

  def to_s
    "(#{ @matches[1] }) #{ @matches[2] }-#{ @matches[3] }"
  end

  def area_code
    @matches[1]
  end

  def number
    validate
  end

end



























































# require 'pry'
#
# class Phone
#
#   def initialize num
#     @num = num.gsub( /\W+/, "" )
#     get_matches
#   end
#
#   def validate
#     if @num.length == 11 && @num[0] == "1"
#       @num = @num[1..10]
#     elsif @num.length != 10
#       @num = "0000000000"
#     end
#     @num
#   end
#
#   def get_matches
#     @matches = @num.match( /(\d{3})(\d{3})(\d{4})/ )
#   end
#
#   def to_s
#     "(#{ @matches[1] }) #{ @matches[2] }-#{ @matches[3] }"
#   end
#
#   def area_code
#     @matches[1]
#   end
#
#   def number
#     validate
#   end
#
# end
