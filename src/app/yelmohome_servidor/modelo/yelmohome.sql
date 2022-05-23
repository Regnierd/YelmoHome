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

-- INSERT USER --
/*INSERT INTO users values (null, "admin", "admin", "admin@gmail.com", "");*/

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

INSERT INTO films values (null, "No respires", " Federico Álvarez", "Rocky, Alex y Money ya han robado casas en otras ocasiones. Ahora preparan un nuevo golpe, el que permitirá a Rocky salir de Detroit y salvar a su hermana pequeña del maltrato de su madre y de una vida sin futuro.", 18, "https://www.lahiguera.net/cinemania/pelicula/7476/no_respires-cartel-7022.jpg", "2016-03-12", "https://www.youtube.com/embed/mvEetUDCKxE"); /*terror - suspenso*/
INSERT INTO films values (null, "No respires 2", "Rodo Sayagues", "Un veterano ciego debe usar su entrenamiento militar para salvar a un joven huérfano de un grupo de matones que irrumpen en su casa.", 18, "https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/07/no-respires-2-poster.jpg?resize=800%2C1186&ssl=1", "2021-08-12", "https://www.youtube.com/embed/en_3ZnETSGE"); /*terror - suspenso*/
INSERT INTO films values (null, "Scream", "Matt Bettinelli-Olpin", "25 años después de que una racha de asesinatos brutales conmocionara a la tranquila ciudad de Woodsboro, un nuevo asesino imitador se ha puesto la máscara de Ghostface para resucitar secretos del pasado.", 18, "https://es.web.img3.acsta.net/pictures/21/12/13/17/32/3629040.jpg", "2022-01-14", "https://www.youtube.com/embed/LItQuV1bFf4"); /*terror - suspenso*/
INSERT INTO films values (null, "La purga: Año de elecciones", "James DeMonaco", "Hace 18 años, Charlie Roan presenció el asesinato de su familia durante la noche de la Purga. En el presente, Charlie es candidata a la presidencia y quiere acabar con el régimen impuesto hace 20 años, que utiliza este día para eliminar a los más pobres y recortar el gasto público, pero antes deberá sobrevivir a doce horas de terror absoluto.", 18, "https://mx.web.img2.acsta.net/pictures/17/12/28/01/53/4013062.jpg", "2016-06-1", "https://www.youtube.com/embed/uksrrUpoWNw"); /* terror - acción*/
INSERT INTO films values (null, "La purga", "James DeMonaco", "Año 2022. En una futura sociedad despótica, el régimen político, llamado Nueva Fundación de los padres de América, ha decidido implantar una medida catártica: la purga anual, según la cual una noche al año se puede cometer cualquier clase de crimen, sin tener que responder ante la justicia.", 16, "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a95d03e5085673900ace003e4f4186e379c223c1b73334228567b84d01a95fa9._RI_V_TTW_.jpg", "2013-07-12", "https://www.youtube.com/embed/K0LLaybEuzA"); /* terror - suspenso*/
INSERT INTO films values (null, "La primera purga", "Gerard McMurray", "La crisis social y económica que atenaza a Estados Unidos ha llevado al poder al partido populista Nuevos Padres Fundadores de América y a su discurso del miedo. Una de sus primeras medidas será un experimento: una noche de crimen legalizado en la zona de Staten Island. ¡Que comience la purga!", 18, "https://www.lahiguera.net/cinemania/pelicula/8508/la_primera_purga_la_noche_de_las_bestias-cartel-8141.jpg", "2018-07-04", "https://www.youtube.com/embed/qZ7xiJcOb-o"); /* terror - accion*/

INSERT INTO films values (null, "One Shot(Misión de rescate)", "James Nunn", "Los miembros de un escuadrón de élite de los Navy SEAL en una misión encubierta quedan atrapados cuando un grupo de insurgentes intentan rescatar al prisionero que están transportando.", 16, "https://es.web.img3.acsta.net/pictures/21/12/09/11/13/0551516.jpg", "2021-11-05", "https://www.youtube.com/embed/ia_9FSrTldI"); /* aventura */
INSERT INTO films values (null, "Shang-Chi y la leyenda de los Diez Anillos", "Destin Daniel Cretton", "El maestro de artes marciales Shang-Chi se enfrenta al pasado que creía haber dejado atrás cuando se ve envuelto en la red de la misteriosa organización de los Diez Anillos.", 12, "https://depor.com/resizer/BhxfJsKD29vXnSYx3S8iNmdWQhc=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/N4CM3BN6CREPFJP3IEFYZZ75NY.jpg", "2021-09-02", "https://www.youtube.com/embed/JuE_axN7wXI"); /* fantasia */
INSERT INTO films values (null, "Spider-Man: No hay camino a casa", "Jon Watts", "Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.", 12, "https://as01.epimg.net/meristation/imagenes/2021/12/16/reportajes/1639644481_655591_1640209353_noticia_normal.jpg", "2021-12-16", "https://www.youtube.com/embed/ldMn-1iQzKE"); /* aventura */

INSERT INTO films values (null, "A dos metros de ti", "Justin Baldoni", "Dos adolescentes, Stella y Will, se encuentran en un hospital debido a las graves enfermedades que padecen y que amenazan su vida. Poco a poco comienzan a conocerse y enamorarse, pero deberán enfrentarse a las reglas hospitalarias que los alejan.", 7, "https://i.ytimg.com/vi/7dPfLaAJTt4/maxresdefault.jpg", "2019-03-07", "https://www.youtube.com/embed/vWhX8aTj5TI"); /* drama */
INSERT INTO films values (null, "Yo antes de ti", "Thea Sharrock", "Louisa una chica inestable y creativa, reside en un pequeño pueblo de la campiña inglesa. Vive sin rumbo y va de un trabajo a otro para ayudar a su familia a llegar a fin de mes. Sin embargo, un nuevo trabajo pondrá a prueba su habitual alegría.", 12, "https://www.lahiguera.net/musicalia/artistas/varios/disco/7688/me_before_you_original_motion_picture_soundtrack-portada.jpg", "2016-07-01", "https://www.youtube.com/embed/PQ0RIeH__hI"); /* romance - drama */
INSERT INTO films values (null, "After: almas perdidas", "Castille Landon", "Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia y la de Hardin ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a romperse en pedazos y ya nada será como antes. Aunque sabe que Hardin la quiere, estas dos almas perdidas están rodeadas de celos, odio... y perdón.", 18, "https://www.abc.com.py/resizer/liILnI-kGljoMWM1-eYLboQuzf8=/1920xorig/smart/cloudfront-us-east-1.images.arcpublishing.com/abccolor/5G75Z5NTSNAZJAFPHAEZEK6NF4.jpg", "2021-09-03", "https://www.youtube.com/embed/speZejQwBQo"); /* romance - drama */

INSERT INTO films values (null, "Wonder", "Stephen Chbosky", "Auggie Pullman tiene 10 años y sueña con convertirse en astronauta algún día. Nació con una grave malformación facial y tuvo que someterse a diez años de operaciones y largos periodos de recuperación en casa. Ahora Auggie debe enfrentarse a otro gran reto: asistir a clase por primera vez.", 0, "https://es.web.img3.acsta.net/pictures/17/11/02/13/42/4865983.jpg", "2017-12-01", "https://www.youtube.com/embed/AWgLSlxOAt4"); /* drama */
INSERT INTO films values (null, "Mujercitas", "Greta Gerwig", "Amy, Jo, Beth y Meg son cuatro hermanas que atraviesan Massachussets con su madre durante la Guerra Civil, unas vacaciones que realizan sin su padre evangelista itinerante. Durante estas vacaciones las adolescentes descubren el amor y la importancia de los lazos familiares.", 0, "https://www.sonypictures.es/sites/default/files/2020-07/littlewomen-keyart.jpg", "2019-12-07", "https://www.youtube.com/embed/BKuDz3pxi7I"); /* drama - romance*/
INSERT INTO films values (null, "Bajo la misma estrella", "Josh Boone", "Hazel tiene dieciséis años, está enferma de cáncer desde pequeña y sobrevive gracias a un pequeño milagro médico y a la bombona de oxígeno que la acompaña todo el tiempo. Un día, Hazel conoce a Gus, que ya ha superado la enfermedad.", 7, "https://i0.wp.com/peliserieshd.com/wp-content/uploads/2020/07/Descargar-Bajo-La-Misma-Estrella-HD-Peli-Series-HD.jpg?fit=1024%2C573&ssl=1", "2014-07-04", "https://www.youtube.com/embed/9Lt8QAZkc94"); /* drama - romance*/
INSERT INTO films values (null, "Harry Potter y la cámara secreta", "Chris Columbus", "Preparándose para una visita de un potencial cliente del tío Vernon, los Dursley confinan a Harry Potter en su habitación. Sin embargo este recibe la visita inesperada de Dobby, un elfo doméstico, que le advierte que no debe regresar a Hogwarts, ya que ahora el lugar no es seguro. Debido a la negativa de Harry, Dobby arruina la cena haciendo que los tíos culparan a Harry. Este incidente fuerza al tío Vernon a encerrar a Harry en su cuarto para que no pueda volver al colegio.", 7, "https://image.tmdb.org/t/p/original/bhCfAzeMMg7GyLDT11yVM2i1NPh.jpg", "2002-11-29", "https://www.youtube.com/embed/0BVdmRbey-o"); /* fantasia - aventura*/
INSERT INTO films values (null, "Harry Potter y el prisionero de Azkaban", "Alfonso Cuarón", "Harry Potter ha pasado otro verano insatisfactorio con los Dursley. Cuando tía Marge insulta a sus padres, pierde los estribos y hace que esta se infle accidentalmente como un globo y se aleje flotando. Harto de todo, Harry huye luego de los Dursley con su equipaje.", 7, "https://pics.filmaffinity.com/Harry_Potter_y_el_prisionero_de_Azkaban-972983833-large.jpg", "2004-06-18", "https://www.youtube.com/embed/cUtaBkW1MKo"); /* fantasia - aventura*/
INSERT INTO films values (null, "Harry Potter y la Orden del Fénix", "David Yates", "En un caluroso día de verano, Harry Potter y su primo Dudley Dursley son repentinamente atacados en un callejón por dos dementores de Azkaban. Sin embargo el joven mago utiliza el encantamiento Patronus para librarse de ellos y salvar a su primo en el proceso, posteriormente Harry corre a socorrer a su primo, pero en ese momento se aparece la vecina de los Dursley, la Sra. Figg, quien le advierte a Harry de no guardar del todo su varita, ya que los dementores podrían regresar por represalias.", 7, "https://image.tmdb.org/t/p/original/zN5DWGV6IO30asXrHzGju9mo20P.jpg", "2007-07-11", "https://www.youtube.com/embed/jdEulcjAvQI"); /* fantasia - aventura*/
INSERT INTO films values (null, "Harry Potter y el misterio del príncipe", "David Yates", "Lord Voldemort pone en un aprieto tanto al mundo mágico como al del muggle al secuestrar en el callejón Diagon al fabricante de varitas Garrick Ollivander y destruir el Puente del Milenio. La familia Malfoy está en desgracia cuando Lucius es arrestado y enviado a Azkaban por estar envuelto con los mortífagos.", 7, "https://static.posters.cz/image/1300/art-photo/harry-potter-el-misterio-del-principe-i122164.jpg", "2009-07-15", "https://www.youtube.com/embed/CHiGk9bEht8"); /* fantasia - aventura*/
INSERT INTO films values (null, "Harry Potter y  las reliquias de la Muerte: parte 1", "David Yates", "Harry, Ron y Hermione se van a una peligrosa misión para localizar y destruir el secreto de la inmortalidad y destrucción de Voldemort - los Horrocruces. Solos, sin la guía de sus profesores o la protección del Profesor Dumbledore, los tres amigos deben apoyarse el uno en el otro más que nunca.", 7, "https://image.tmdb.org/t/p/original/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg", "2010-11-19", "https://www.youtube.com/embed/mfGqR6yeZAM"); /* fantasia - aventura*/
INSERT INTO films values (null, "Harry Potter y  las reliquias de la Muerte: parte 2", "David Yates", "La batalla entre las fuerzas del bien y las del mal en el mundo mágico termina en una guerra suprema. Las apuestas están al máximo y nadie está a salvo. Pero es Harry Potter quien debe ser llamado para hacer el último sacrificio, mientras se acerca al enfrentamiento con Lord Voldemort. Todo termina aquí.", 7, "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/11/harry-potter-reliquias-muerte-parte-ii.jpg?itok=8bfQF-Fr", "2011-07-15", "https://www.youtube.com/embed/HguSMW8XveQ"); /* fantasia*/


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
INSERT INTO category_films values (7, 16);
INSERT INTO category_films values (8, 16);
INSERT INTO category_films values (7, 17);
INSERT INTO category_films values (8, 17);
INSERT INTO category_films values (7, 18);
INSERT INTO category_films values (8, 18);
INSERT INTO category_films values (7, 19);
INSERT INTO category_films values (1, 19);
INSERT INTO category_films values (7, 20);
INSERT INTO category_films values (8, 20);
INSERT INTO category_films values (7, 21);
INSERT INTO category_films values (1, 21);
INSERT INTO category_films values (2, 22);
INSERT INTO category_films values (3, 23);
INSERT INTO category_films values (2, 24);
INSERT INTO category_films values (6, 25);
INSERT INTO category_films values (5, 26);
INSERT INTO category_films values (6, 26);
INSERT INTO category_films values (5, 27);
INSERT INTO category_films values (6, 27);
INSERT INTO category_films values (6, 28);
INSERT INTO category_films values (5, 29);
INSERT INTO category_films values (6, 29);
INSERT INTO category_films values (5, 30);
INSERT INTO category_films values (6, 30);
INSERT INTO category_films values (2, 31);
INSERT INTO category_films values (3, 31);
INSERT INTO category_films values (2, 32);
INSERT INTO category_films values (3, 32);
INSERT INTO category_films values (2, 33);
INSERT INTO category_films values (3, 33);
INSERT INTO category_films values (2, 34);
INSERT INTO category_films values (3, 34);
INSERT INTO category_films values (2, 35);
INSERT INTO category_films values (3, 35);
INSERT INTO category_films values (3, 36);