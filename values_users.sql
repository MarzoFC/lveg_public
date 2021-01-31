CREATE TABLE `users` (   `id`       int(11)     unsigned NOT NULL AUTO_INCREMENT,   `name`     varchar(30) DEFAULT '',   `rol`    varchar(50) DEFAULT '', `website`     varchar(50) DEFAULT '',  `contact`     varchar(30) DEFAULT '', `info`     varchar(100) DEFAULT '', `img`     varchar(50) DEFAULT '',     PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO users (name, img,rol,website,contact,info)       VALUES ('Ruinseñor', 'ruinsenor.jpeg','voz','https://soundcloud.com/sicersle','','');
INSERT INTO users (name, img, rol,website,contact,info)       VALUES ('Jaloner', 'voz','jal.png','https://www.youtube.com/channel/UCZfDAC4rU47BJo7UKR7SNRA','','');
INSERT INTO users (name, img,rol,website,contact,info)       VALUES ('Kiamya', 'kiamya.jpeg','voz','','','');
INSERT INTO users (name,,img,rol,website,contact,info)       VALUES ('Crackoink','' ,'vis','','','');
INSERT INTO users (name,img,rol,website,contact,info)       VALUES ('Dj Saizer','', 'prod','','','');
INSERT INTO users (name, img,rol,website,contact,info)       VALUES ('Bomba Teknik','bombateknik.png', 'est','','','');
