CREATE SCHEMA `easy_booking` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `easy_booking`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Tabla de usuarios administradores';

CREATE TABLE `easy_booking`.`theater_halls` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `theater` VARCHAR(255) NOT NULL,
  `amount_chairs` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `theater_UNIQUE` (`theater` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Salas de teatro';

CREATE TABLE `easy_booking`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `url_image` TEXT(1000) NOT NULL,
  `theater_hall_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `theater_hall_id_idx` (`theater_hall_id` ASC) VISIBLE,
  CONSTRAINT `theater_hall_id`
    FOREIGN KEY (`theater_hall_id`)
    REFERENCES `easy_booking`.`theater_halls` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Contiene todos los eventos que se desarrollan en las salas de teatro';

CREATE TABLE `easy_booking`.`funtions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hour` VARCHAR(255) NOT NULL,
  `event_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `event_id_idx` (`event_id` ASC) VISIBLE,
  CONSTRAINT `event_id`
    FOREIGN KEY (`event_id`)
    REFERENCES `easy_booking`.`events` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Todas las funciones que se desarrollan en los eventos';

CREATE TABLE `easy_booking`.`spectators` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Los espectadores';

CREATE TABLE `easy_booking`.`spectators_funtions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `spectator_id` INT NOT NULL,
  `function_id` INT NOT NULL,
  `chair` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `spectator_id_idx` (`spectator_id` ASC) VISIBLE,
  INDEX `function_id_idx` (`function_id` ASC) VISIBLE,
  CONSTRAINT `spectator_id`
    FOREIGN KEY (`spectator_id`)
    REFERENCES `easy_booking`.`spectators` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `function_id`
    FOREIGN KEY (`function_id`)
    REFERENCES `easy_booking`.`funtions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Los espectadores que asisten a las funciones';
