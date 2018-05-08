CREATE TABLE cymbals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  maker TEXT,
  name TEXT,
  type TEXT,
  sound TEXT,
  size INTEGER
);

INSERT INTO cymbals (maker, name, type, sound, size) VALUES ('Zildjian', 'K Constantinople', 'Crash', 'Dark and Rich', 16);
