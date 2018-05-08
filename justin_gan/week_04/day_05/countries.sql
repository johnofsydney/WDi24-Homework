DROP TABLE IF EXISTS countries;
CREATE TABLE countries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  continent TEXT,
  capital TEXT,
  area INTEGER,
  population INTEGER
);

-- SEED DATA
INSERT INTO countries (name, continent, capital, area, population) VALUES ('Finland', 'Europe', 'Helsinki', 338424, 5509717);

INSERT INTO countries (name, continent, capital, area, population) VALUES ('United States of America', 'North America', 'Washington, D.C', 3796742, 325365189);

INSERT INTO countries (name, continent, capital, area, population) VALUES ('Japan', 'Asia', 'Tokyo', 377972, 126672000);
