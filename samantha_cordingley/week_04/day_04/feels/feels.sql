CREATE TABLE feels (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  screenname TEXT,
  week TEXT,
  day TEXT,
  message TEXT
);

--seed data
INSERT INTO feels (screenname, week, day, message) VALUES ('sam', 'week one', 'Monday', 'This is weird.');
