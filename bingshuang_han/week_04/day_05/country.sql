CREATE TABLE countries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  ninja TEXT,
  tag  TEXT,
  image TEXT  --URL image

);
INSERT INTO countries (name,tag,image) VALUES ('Earth','','https://vignette.wikia.nocookie.net/naruto/images/e/e4/Iwagakure_no_Sato.png/revision/latest?cb=20131007010456');
INSERT INTO countries (name,tag,image) VALUES ('Fire','https://vignette.wikia.nocookie.net/narutofanon-central/images/5/50/120px-Land_of_Fire_Symbol.svg.png/revision/latest?cb=20131027135920','http://userimages-akm.imvu.com/userdata/53/44/78/80/userpics/Snap_eBbZedKEvX1264850723.jpg');
INSERT INTO countries (name,image) VALUES ('Water','https://vignette.wikia.nocookie.net/naruto/images/8/87/Hacho_village.png/revision/latest?cb=20121129142847');
INSERT INTO countries (name,image) VALUES ('Wind','http://images3.wikia.nocookie.net/__cb20100827142315/naruto/images/f/fe/Kazekage_Residence.PNG');
INSERT INTO countries (name) VALUES ('Lightning');
