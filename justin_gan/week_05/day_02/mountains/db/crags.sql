DROP TABLE IF EXISTS crags;
CREATE TABLE crags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  location TEXT,
  elevation INTEGER,
  parent_range TEXT,
  mountain_type TEXT
);
