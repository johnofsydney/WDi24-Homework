CREATE TABLE ninjas  (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  birthday TEXT,
  country TEXT,
  nature_type  TEXT,
  image TEXT,   --url
  story TEXT
);

INSERT INTO ninjas (name,nature_type,image) VALUES ('Naruto Uzumaki','Wind,Fire,Water,Earth,Lawa,Magnet','https://dw9to29mmj727.cloudfront.net/promo/2016/5294-Curtain_Naruto02_2000x1024.jpg');
INSERT INTO ninjas (name,nature_type,image) VALUES ('Kakashi Hatake ','Lightning,Water,Earth','https://pre00.deviantart.net/d596/th/pre/f/2016/052/7/7/kakashi__by_edwinhuang-d9sk1su.jpg');
