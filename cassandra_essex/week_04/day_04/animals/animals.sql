CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  country TEXT,
  population TEXT,
  image TEXT -- url for a photo
);

INSERT INTO animals (name, country, population) VALUES ('Black Rhino', 'Namibia', 5000);
INSERT INTO animals (name, country, population) VALUES ('Amur Leopard', 'Amur-Heiong',60);
INSERT INTO animals (name, country, population) VALUES ('Malayan Tiger', 'Malaysia', 250);
INSERT INTO animals (name, country, population) VALUES ('Sumatran Elephants', 'Sumatra', 2400);
INSERT INTO animals (name, country, population) VALUES ('Bengal Tiger', 'India', 2500);
