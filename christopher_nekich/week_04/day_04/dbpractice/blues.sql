CREATE TABLE blues (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  hex TEXT,
  image TEXT,
  rating INTEGER
);

-- seed

INSERT INTO blues (name, hex, image, rating) VALUES ("Azure", "#007FFF", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Azurblau_Pigment.JPG", 5);
