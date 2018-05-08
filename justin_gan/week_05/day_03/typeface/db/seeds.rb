Category.destroy_all
Category.create(:name => 'Sans-serif', :image => 'http://blog.glasscanopy.com/wp-content/uploads/2014/01/SansSerif.jpg', :description => 'In typography, a sans-serif font is one that doesn\'t have extending features called "serifs" at the end of strokes. They are often used to convey simplicity and modernity or minimalism.' )

Font.destroy_all
Font.create(:name => 'Gill Sans', :classification => 'Humanist', :designer => 'Eric Gill', :year_created => 1926, :image => 'https://en.wikipedia.org/wiki/Gill_Sans#/media/File:GillSansEG.svg', :category_id => 1)
