DROP DATABASE IF EXISTS yelmohome;
CREATE DATABASE yelmohome DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
CREATE USER IF NOT EXISTS 'yelmohomeUser'@'localhost' IDENTIFIED BY 'admin1234';
GRANT ALL ON yelmohome.* TO 'yelmohomeUser'@'localhost';

use yelmohome;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id_user int (255) not null AUTO_INCREMENT,
    name_user varchar (50) not null,
    password varchar(255) not null,
    email varchar(100) not null,
    fileName varchar(255) COLLATE utf8_unicode_ci not null,
    PRIMARY KEY (id_user),
    UNIQUE KEY name_user (name_user),
    UNIQUE KEY email (email)
)ENGINE = InnoDB;

DROP TABLE IF EXISTS films;

CREATE TABLE films(
    id_film int (255) not null AUTO_INCREMENT,
    title varchar (150) not null,
    author varchar(150) not null,
    description text DEFAULT null,
    rating int (2) not null,
    img varchar(255) DEFAULT null,
    premiere date DEFAULT null,
    video varchar(255) DEFAULT null,
    PRIMARY KEY (id_film)
)ENGINE = InnoDB;

DROP TABLE IF EXISTS category;

CREATE TABLE category(
    id_category int (255) not null AUTO_INCREMENT,
    category varchar (50) not null,
    PRIMARY KEY (id_category)
)ENGINE = InnoDB;

DROP TABLE IF EXISTS category_films;

CREATE TABLE category_films(
    id_category int not null,
    id_film int not null,
    PRIMARY KEY (id_category, id_film),
    FOREIGN KEY (id_category) REFERENCES category (id_category),
    FOREIGN KEY (id_film) REFERENCES films (id_film)
)ENGINE = InnoDB;

-- INSERT FILMS --
INSERT INTO films values (null, "Al filo del mañana", "Doug Liman", "Se sitúa en un futuro cercano, en el marco de una invasión extraterrestre a nuestro planeta, cuyo objetivo es destruir a la especie humana.", 12, "https://images-ext-1.discordapp.net/external/GerSF84z4EGoWVtITg2OjcRsTU9vkohu-7VijpD69jw/https/pics.filmaffinity.com/Al_filo_del_ma_ana-737445435-large.jpg", "2014-05-30", "https://www.youtube.com/embed/Qd0_qYIhMZA");
INSERT INTO films values (null, "Acero puro", "Shawn Levy", "En 2020, los boxeadores humanos son reemplazados por robots. Charlie Kenton (Hugh Jackman), un exboxeador, es propietario de «Ambush», pero lo pierde en una pelea arreglada contra un toro perteneciente al promotor y propietario de carnaval.", 0, "https://images4.alphacoders.com/171/thumb-1920-171878.jpg", "2011-12-02", "https://www.youtube.com/embed/zKtpo3jR7tU");
INSERT INTO films values (null, "Thor", "Kenneth Branagh", "Tras desatar una antigua guerra, el codicioso guerrero Thor es desterrado a la Tierra por su padre para que viva entre los hombres y descubra así el verdadero sentido de la humildad. Allí, sin sus poderes, Thor deberá enfrentarse a las fuerzas más oscuras que su mayor enemigo le enviará desde Asgard.", 7, "https://www.10wallpaper.com/wallpaper/1920x1080/1310/Thor_The_Dark_World_Movie_HD_Wallpaper_1920x1080.jpg", "2011-04-29", "https://www.youtube.com/embed/gNOX4SEQ7aM");
INSERT INTO films values (null, "Iron Man", "Jon Favreau", "Tony Stark es un inventor de armamento brillante que es secuestrado en el extranjero. Sus captores son unos terroristas que le obligan a construir una máquina destructiva pero Tony se construirá una armadura para poder enfrentarse a ellos y escapar.", 7, "https://www.cinemascomics.com/wp-content/uploads/2020/05/iron-man-2008-1.jpg", "2008-04-30", "https://www.youtube.com/embed/PmAqcdk4d48");
INSERT INTO films values (null, "El increible Hulk", "Louis Leterrier", "Bruce Banner recorre el mundo en busca de un antídoto para librarse de su alter ego. Además tendrá que hacer frente a Emil, un nuevo enemigo, lo que convertirá a Nueva York en el escenario de la última batalla entre las dos criaturas más poderosas.", 12, "https://images-ext-2.discordapp.net/external/qSx0_BJ7_CKVaZNRYni3ee80QopwKweXPp3UOAxCJpM/https/pics.filmaffinity.com/El_incre_ble_Hulk-694752802-large.jpg", "2008-06-20", "https://www.youtube.com/embed/xbqNb2PFKKA");
INSERT INTO films values (null, "Iron Man 2", "Jon Favreau", "Con el mundo ahora consciente de que él es Iron Man, el millonario inventor Tony Stark debe forjar nuevas alianzas y enfrentarse a un nuevo y poderoso enemigo.", 12, "https://www.victorsancho.com/wp-content/uploads/2021/08/poster-4.jpg", "2010-04-30", "https://www.youtube.com/embed/Ab_mvS68xng");
INSERT INTO films values (null, "Capitán américa: el primer vengador", "Joe Johnston", "Tras tres meses de someterse a un programa de entrenamiento físico y táctico, Steve Rogers es encomendado su primera misión como Capitán América. Armado con un escudo indestructible, emprenderá la guerra contra el Mal como líder de los Vengadores.", 12, "https://dossierinteractivo.com/wp-content/uploads/2021/08/Capitan-America-el-primer-vengador-portada.jpg", "2011-08-5", "https://www.youtube.com/embed/YqEJ0jpFvSU");
INSERT INTO films values (null, "Los vengadores", "Joss Whedon", "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.", 7, "http://pm1.narvii.com/6898/90ca2f233315eaf4abc92dfee1d2ded86a013c0cr1-1000-1500v2_uhq.jpg", "2012-04-27", "https://www.youtube.com/embed/HQIiYqOVTWo");
INSERT INTO films values (null, "Iron Man 3", "Shane Black", "El descarado y brillante Tony Stark, tras ver destruido todo su universo personal, debe encontrar y enfrentarse a un enemigo cuyo poder no conoce límites. Este viaje pondrá a prueba su entereza una y otra vez, y le obligará a confiar en su ingenio.", 12, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ironman-3-1556537437.jpeg", "2013-04-26", "https://www.youtube.com/embed/6Cl8PmVm3YE");
INSERT INTO films values (null, "Thor: El mundo oscuro", "Alan Taylor", "Malekith, un enemigo más antiguo que el universo, regresa a la Tierra para cumplir su plan destructor. Thor debe enfrentarse a un rival al que ni siquiera Odín parece poder detener y, desesperado, libera a su hermano Loki para que lo ayude.", 7, "https://clericsirionwendetta.files.wordpress.com/2014/01/thor2.jpg", "2013-04-26", "https://www.youtube.com/embed/Dos2w0C3LP0");
INSERT INTO films values (null, "Belleza Oculta", "David Frankel", "Un exitoso ejecutivo de publicidad de Nueva York sufre una tragedia personal y cae en una depresión. Sus amigos crean, entonces, un plan drástico para llegar a él antes de que lo pierda todo.", 12, "http://www.ciempiesmagazine.com/wp-content/uploads/2017/01/belleza_oculta_61191.jpg", "2016-12-16", "https://www.youtube.com/embed/nQFTfCBOdJo");
INSERT INTO films values (null, "Siete Almas", "Gabriele Muccino", "Ben Thomas, un inspector fiscal de Los Ángeles, se pone en contacto con algunas personas para ayudarlas, pero las razones que lo mueven a actuar así son un misterio. Sin embargo, cuando conoce a Emily, sus inconfesables planes se quiebran.", 13, "https://images-ext-1.discordapp.net/external/mnl6j6u3_yI6w5_1zNuPsqBsayGyg2oOCqqIN0r30bU/https/pics.filmaffinity.com/Siete_almas-365678205-large.jpg", "2009-01-16", "https://www.youtube.com/embed/bdQqlVibf5A");
INSERT INTO films values (null, "Harry Potter y la piedra filosofal", "Chris Columbus", "El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.", 0, "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/harry-potter-piedra-filosofal.jpg?itok=1_pqQxcN", "2001-11-30", "https://www.youtube.com/embed/WE4AJuIvG1Y");
INSERT INTO films values (null, "Harry Potter y el cáliz de fuego", "Mike Newell", "Cuando el nombre de Harry Potter emerge del Cáliz de Fuego, se convierte en un competidor en una batalla agotadora por la gloria entre tres colegios de magos – El Torneo de los Tres Magos. Pero ya que Harry nunca presentó su nombre para El Torneo, ¿quién lo hizo? Ahora Harry debe enfrentar a un dragón infalible, demonios acuáticos feroces y un laberinto encantado, solamente para encontrarse con el cruel descubrimiento de El Quien No Debe Ser Nombrado.", 7, "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/36d52aec891350d8b9668825ac4fa0b04c35283653f4c73b63284a0dac33c78f._RI_V_TTW_.jpg", "2005-11-25", "https://www.youtube.com/embed/wX5dWfUKGPg");
INSERT INTO films values (null, "Expediente Warren: El conjuro", "James Wan", "Basada en hechos reales. Narra los encuentros sobrenaturales que vivió la familia Perron en su casa de Rhode Island a principios de los 70.", 16, "https://images-ext-1.discordapp.net/external/ASvMAqLqim9gtJ4lF3oBt_sKYX4N0yAOzQwZj4spb6g/https/pics.filmaffinity.com/Expediente_Warren_The_Conjuring-706833508-large.jpg", "2013-07-19", "https://www.youtube.com/embed/1kOlrEwTfco");


-- INSERT CATEGORY --
INSERT INTO category values (null, "Acción");
INSERT INTO category values (null, "Aventura");
INSERT INTO category values (null, "Fantasía");
INSERT INTO category values (null, "Cienca ficción");
INSERT INTO category values (null, "Romance");
INSERT INTO category values (null, "Drama");
INSERT INTO category values (null, "Terror");
INSERT INTO category values (null, "Suspenso");

-- INSERT CATEGORY_FILMS --
INSERT INTO category_films values (1, 1);
INSERT INTO category_films values (4, 1);
INSERT INTO category_films values (1, 2);
INSERT INTO category_films values (4, 2);
INSERT INTO category_films values (1, 3);
INSERT INTO category_films values (3, 3);
INSERT INTO category_films values (1, 4);
INSERT INTO category_films values (4, 4);
INSERT INTO category_films values (1, 5);
INSERT INTO category_films values (4, 5);
INSERT INTO category_films values (1, 6);
INSERT INTO category_films values (2, 6);
INSERT INTO category_films values (1, 7);
INSERT INTO category_films values (2, 7);
INSERT INTO category_films values (1, 8);
INSERT INTO category_films values (2, 8);
INSERT INTO category_films values (1, 9);
INSERT INTO category_films values (2, 9);
INSERT INTO category_films values (1, 10);
INSERT INTO category_films values (2, 10);
INSERT INTO category_films values (5, 11);
INSERT INTO category_films values (6, 11);
INSERT INTO category_films values (6, 12);
INSERT INTO category_films values (5, 12);
INSERT INTO category_films values (3, 13);
INSERT INTO category_films values (2, 13);
INSERT INTO category_films values (3, 14);
INSERT INTO category_films values (2, 14);
INSERT INTO category_films values (7, 15);
INSERT INTO category_films values (8, 15);

