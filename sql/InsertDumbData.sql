INSERT INTO `easy_booking`.`users`
(`username`,
`password`)
VALUES
('admin', '21232f297a57a5a743894a0e4a801fc3');

INSERT INTO `easy_booking`.`theater_halls`
(`theater`,
`amount_chairs`)
VALUES
('Teatro Colón', 12),
('Ópera de Sídney', 20),
('Gran Teatre del Liceu', 15),
('Teatro Mayor Julio Mario Santo Domingo', 25);

INSERT INTO `easy_booking`.`spectators`
(`email`,
`phone`)
VALUES
('danielfelipeluis@outlook.com', '3108718495'),
('felipeluiz152000@gmail.com', '3124567548');

INSERT INTO `easy_booking`.`events`
(`name`,
`url_image`,
`theater_hall_id`)
VALUES
('Romeo y Julieta', 'ruta', 1),
('Hamlet', 'ruta', 2),
('La Celestina', 'ruta', 3),
('La vida es sueño', 'ruta', 4),
('Don Juan Tenorio', 'ruta', 1),
('La casa de Bernarda Alba', 'ruta', 2),
('Fuenteovejuna', 'ruta', 3),
('El sueño de una noche de verano', 'ruta', 4),
('Edipo rey', 'ruta', 1),
('Bodas de sangre', 'ruta', 2),
('El enfermo imaginario', 'ruta', 3),
('Un tranvía llamado Deseo', 'ruta', 4),
('Casa de muñecas', 'ruta', 1),
('El alcalde de Zalamea', 'ruta', 2),
('Macbeth', 'ruta', 3),
('El jardín de los cerezos', 'ruta', 4);

INSERT INTO `easy_booking`.`funtions`
(`hour`,
`event_id`)
VALUES
('13:30', 1),
('15:45', 1),
('18:15', 2),
('20:30', 2),
('15:45', 3),
('21:30', 3),
('18:30', 4),
('22:15', 4),
('13:45', 5),
('18:30', 5),
('19:30', 6),
('23:15', 6),
('05:30', 7),
('08:30', 7),
('12:45', 7),
('18:15', 7),
('13:30', 8),
('16:30', 8),
('18:45', 9),
('19:30', 9),
('13:30', 10),
('15:15', 10),
('14:45', 11),
('19:30', 11),
('18:30', 12),
('14:15', 12),
('19:30', 13),
('21:30', 13),
('13:15', 14),
('18:30', 14),
('15:30', 15),
('17:30', 15),
('08:30', 16),
('11:15', 16);

INSERT INTO `easy_booking`.`spectators_funtions`
(`spectator_id`,
`function_id`,
`chair`)
VALUES
(1,1,2),
(2,1,1),
(2,2,3),
(1,2,2),
(1,3,2),
(2,3,1),
(2,4,3),
(1,4,2),
(1,5,2),
(2,5,1),
(2,6,3),
(1,6,2),
(1,7,2),
(2,7,1),
(2,8,3),
(1,8,2),
(1,9,2),
(2,9,1),
(2,10,3),
(1,10,2),
(1,11,2),
(2,11,1),
(2,12,3),
(1,12,2),
(1,13,2),
(2,13,1),
(2,14,3),
(1,14,2),
(1,15,2),
(2,15,1),
(2,16,3),
(1,16,2);
