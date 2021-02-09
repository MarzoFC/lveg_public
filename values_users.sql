CREATE TABLE `users` (   `id`       int(11)     unsigned NOT NULL AUTO_INCREMENT,   `name`     varchar(30) DEFAULT '',   `rol`    varchar(50) DEFAULT '', `website`     varchar(500) DEFAULT '',  `contact`     varchar(50) DEFAULT '', `info`     varchar(500) DEFAULT '', `img`     varchar(150) DEFAULT '',     PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- VOCES
INSERT INTO users (name, img,rol,website,contact,info)       VALUES ('Ruinseñor', './assets/ruinsenor.jpeg','voz','https://soundcloud.com/sicersle','','');
INSERT INTO users (name, img,rol,website,contact,info)       VALUES ('Jaloner', './assets/jal.png','voz','https://www.youtube.com/channel/UCZfDAC4rU47BJo7UKR7SNRA','','');
INSERT INTO users (name, img,rol,website,contact,info)       VALUES ('Kiamya', './assets/kiamya.jpeg','voz','https://open.spotify.com/artist/4BFDDRhg1p8DgMIvh4dyXV','','');
INSERT INTO users (name, img,rol,website,contact,info)       VALUES ('Buchareli', './assets/buca.jpeg','voz','','','');

-- VISUALES
INSERT INTO users (name,img,rol,website,contact,info)       VALUES ('Crackoink','./assets/jau.jpeg' ,'vis','','','');

-- PRODUCTORXS
INSERT INTO users (name,img,rol,website,contact,info)       VALUES ('Dj Saizer','./assets/saizer.jpeg', 'prod','','','');

-- ESTUDIOS
INSERT INTO users (name, img,rol,website,contact,info)       VALUES ('Bomba Teknik','./assets/bt.jpeg', 'est','','','')