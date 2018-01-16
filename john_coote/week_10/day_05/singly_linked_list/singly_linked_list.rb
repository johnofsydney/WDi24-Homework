class SinglyLinkedList

  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil 
    end
  end

  attr_accessor :head
  def initialize
    @head = nil
  end

  def prepend (value)
    node = Node.new(value)
    node.next = @head
    @head = node
  end
end





require "pry"
binding.pry
