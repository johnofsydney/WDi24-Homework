Author.destroy_all
Author.create(:first_name => 'JK', :last_name => 'Rowling', :hometown => 'Gloucestershire, England', :dob => '1965/07/31')

Book.destroy_all
Book.create(:name => 'Harry Potter and the Philosophers Stone', :author => 'JK Rowling', :genre => 'fantasy', :image => 'https://images-na.ssl-images-amazon.com/images/I/818PicDErkL.jpg')
