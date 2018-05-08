Artist.destroy_all

Artist.create(:name => 'John Paul Fauves', :nationality => 'Costa Rican', :image => 'https://farm5.staticflickr.com/4572/37689361575_a8796567dc.jpg', :dob => 'unknown', :instagram => '@lefauves')

Work.destroy_all

Work.create(:title => 'I love Gucci', :material => 'Mixed media acrylic and oil paint', :image => 'https://farm5.staticflickr.com/4586/24637978648_f7210d517a_z.jpg')
