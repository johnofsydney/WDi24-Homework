CREATE TABLE players (
id INTEGER PRIMARY KEY AUTOINCREMENT,
first_name TEXT,
last_name TEXT,
position TEXT,
nationality TEXT,
flag TEXT,
jersey INTEGER,
image TEXT
);

--seed data
INSERT INTO players (first_name, last_name, position,nationality, jersey) VALUES ('Eden', 'Hazard', 'Midfielder', 'Belgium', 10);
