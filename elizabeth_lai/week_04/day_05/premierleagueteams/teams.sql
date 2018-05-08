CREATE TABLE teams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  stadium TEXT,
  coach TEXT,
  logo TEXT
);

--seed data
INSERT INTO teams (name, stadium, coach) VALUES ('Chelsea Football Club', 'Stamford Bridge', 'Antonio Conte');
