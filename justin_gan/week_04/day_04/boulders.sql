CREATE TABLE boulders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  grade TEXT,
  crag TEXT,
  country TEXT,
  ascensionists TEXT,
  image TEXT
);

-- seed data
INSERT INTO boulders (name, grade, crag, country, ascensionists, image) VALUES ('Burden of Dreams', 'V17', 'Lappnor', 'Finland', 'Nalle Hukkataival', 'http://www.thelappnorproject.com/images/burden_of_dreams_03_hold_swing.jpg');
INSERT INTO boulders (name, grade, crag, country, ascensionists, image) VALUES ('Creature of the Black Lagoon', 'V16', 'Rocky Mountain National Park', 'USA - Colorado', 'Daniel Woods, Dave Graham', 'http://rockandice.com/wp-content/uploads/2017/09/Jimmy-Webb-Creature-from-the-Black-Lagoon-V16-third-ascent.jpg');
INSERT INTO boulders (name, grade, crag, country, ascensionists, image) VALUES ('Nayuta', 'V16', 'Gero', 'Japan', 'Dai Koyamada', 'https://scontent-syd2-1.cdninstagram.com/t51.2885-15/e35/17818663_1006688026129931_5985866615873339392_n.jpg');
