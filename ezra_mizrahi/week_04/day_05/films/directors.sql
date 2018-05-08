CREATE TABLE directors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  nationality TEXT,
  biography TEXT,
  filmography TEXT,
  image TEXT
);

-- seed data

INSERT INTO directors (name, nationality, biography, filmography) VALUES ('Koji Wakamatsu', 'Japanese', 'A controversional Japanese director known for pushing against norms by shooting softcore pink features, violent movies, and left-wing resistance cuts.', 'Gewalt! Gewalt: shojo geba geba, Sekigun-P.F.L.P: Sekai senso sengen');
