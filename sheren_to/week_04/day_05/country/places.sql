DROP TABLE IF EXISTS places;
CREATE TABLE places (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country TEXT,
  city TEXT,
  image TEXT
);

INSERT INTO places (country, city) VALUES ('Australia', 'Canberra');
INSERT INTO places (country, city) VALUES ('Switzerland', 'Bern');
