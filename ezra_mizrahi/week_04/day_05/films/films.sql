CREATE TABLE films (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  director TEXT,
  genre TEXT,
  year INTEGER,
  language TEXT,
  synopsis TEXT,
  image TEXT
);

-- seed data

INSERT INTO films (title, director, genre, year, language, synopsis) VALUES ('Gewalt! Gewalt: shojo geba geba', 'Koji Wakamatsu', 'pinku', 1969, 'Japanese', 'Several young hipsters kidnap a loving couple and keep them trapped in a barren landscape while free-jazz plays in the background.');
