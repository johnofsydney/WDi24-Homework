

class SinglyLinkedList

  Node = Struct.new(:value, :next) # called a Struct
  # ******* replaces all this code below, when you need a class with no methods:
  # class Node  # Node is for a SinglyLinkedList, can create a class in a class
  #   attr_accessor :value, :next
  #
  #   def initialize(value)
  #     @value = value
  #     @next = nil
  #   end
  # end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) if value
  end

  # AKA UNSHIFT
  def prepend(value)
    node = Node.new(value)
    node.next = @head
    @head = node
  end

  # AKA PUSH  #### amended to stop error if existing SinglyLinkedList is empty
  def append(value)
    node = Node.new(value)
    if last
      last.next = node
    else
      @head = node
    end
  end

  def <<(value) # taking advantage of builtin syntactic sugar, ruby will let me call it without .
    append(value)
  end

  def last
    node = @head
    while node && node.next
      node = node.next # traverse by one to the next node
    end
    node
  end

  def insert_after(existing_value, new_value)
    new_node = Node.new(new_value)
    existing_node = find existing_value
    new_node.next = existing_node.next
    existing_node.next = new_node
  end

  def remove # AKA SHIFT
  end

  def length # LENGTH AKA COUNT AKA SIZE
      node = @head  # let node be our node to be considered, and start at the head
      counter = 0
      while node    # while this node exists, inc counter and consider next node
        counter += 1
        node = node.next
      end
      counter
  end

  def find(needle)
    # returns node with value of needle or nil. ** returns first occurence **
    node = @head
    while node && node.value != needle
      node = node.next
    end
    node
  end

  def prev(node)
    # return nil straight away if value is the first value i.e. nothing previous
    return nil if node == @head
    prev_node = @head
    found = false
    while prev_node && !found
      if prev_node.next && prev_node.next == node
        found = true
      else
        prev_node = prev_node.next
      end
    end
    return nil if !found
    prev_node
  end


  def reverse
    list = SinglyLinkedList.new
    node = self.last
    list.append node.value
    node = prev node
    while node
      list.append node.value
      node = prev node
    end
    list
  end

  def reverse!
    orig = self.dup
    node = orig.last
    self.head = node # now list has just last elem, pointing to nil
    # now put each value back into self in reverse order
    index = orig.length - 2 # minus 2 bc 0 start and bc we've already done one element
    while index >= 0
      self.append orig[index]
      index -= 1
    end
    self
  end


  def each
    # pass in a block and have it execute the block
    node = @head
    while node
      yield node
      node = node.next
    end
    self # return self like builtin ruby each method does
  end

  # map, inject, select - have interpretted it as iterate through and consider VALUES of nodes, more intuitive
  def map
    # make a copy of List
    mapped = SinglyLinkedList.new
    self.each do |n|
      mapped.append n.value
    end
    # now map
    mapped.each do |n|
      n.value = yield n.value
    end
    mapped
  end

  def inject
    memory = self.head.value
    self.each do |n|
      memory = yield memory, n.next.value unless n.next.nil?
    end
    memory
  end

  def select
    selected = SinglyLinkedList.new
    self.each do |n|
      if yield n.value
        selected.append n.value
      end
    end
    selected
  end

  # YIELD USAGE REFERENCE

  # def test
  #    yield 5,10
  #    puts "You are in the method test"
  #    yield 100,200
  # end
  #
  # test {|i,j| puts "You are in the block"}
  #
  # OUTPUT:
  # You are in the block
  # You are in the method test
  # You are in the block

  # Can pass parameters with the yield statement:
  #
  # def test
  #    yield 5,10
  #    puts "You are in the method test"
  #    yield 100,200
  # end
  #
  # test {|i,j| puts "You are in the block #{i} and #{j}"}
  #
  # OUTPUT:
  # You are in the block 5 and 10
  # You are in the method test
  # You are in the block 100 and 200


  def at_index(needle)
    # returns index in list or nil
    index = -1
    node = @head
    found = false
    while node && !found
      index += 1
      if node.value == needle
        return index
      else
        node = node.next
      end
    end
    # if we reached this point, needle not found
    index = nil
  end

  # write [] method
  # first wip, returning entire nodes, before deciding it's more intuitive to return values
  # def [](index)  # taking advantage of builtin syntactic sugar, ruby will let me use it as [index]
  #   if index >= 0
  #     node = @head
  #     index.times do
  #       node = node.next if node
  #     end
  #   elsif index < 0
  #     node = last
  #     iter = (index * -1) - 1  # convert negative number to pos and -1 bc we have already said node = last
  #     (iter).times do
  #       node = prev node
  #     end
  #   end
  #   node
  # end

  # second version:
  # returning values rather than nodes
  # more intuitive if we're pretending
  # we're making an array-like structure from scratch
  # taking advantage of builtin syntactic sugar,
  # ruby will let me use it as [index]
  def [](index)
    if index >= 0
      node = @head
      index.times do
        node = node.next if node
      end
    elsif index < 0
      node = last
      iter = (index * -1) - 1  # convert neg to pos and
                               #  - 1 bc node = last
      (iter).times do
        node = prev node
      end
    end
    node ? node.value : nil
  end
end






# how it should work
bros = SinglyLinkedList.new
bros.append "Groucho"
bros.append "Chico"
bros << "Gummo"

nums = SinglyLinkedList.new
nums << 1
nums << 2
nums << 3
nums << 4

require 'pry'
binding.pry
















#
