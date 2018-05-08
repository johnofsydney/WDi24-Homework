CREATE TABLE log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  screenname TEXT,
  week TEXT,
  day TEXT,
  message TEXT
);

--seed data
INSERT INTO log (screenname, week, day, message) VALUES ('Codenube', 'week 1', 'Monday', 'New is difficult');
