SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `appply` ;
USE `appply` ;

-- -----------------------------------------------------
-- Table `appply`.`bundle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`bundle` (
  `idbundle` INT(11) NOT NULL AUTO_INCREMENT,
  `amount` INT(11) NOT NULL,
  `price` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`idbundle`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`work_enviroment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`work_enviroment` (
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `longitude` FLOAT NOT NULL,
  `latitude` FLOAT NOT NULL,
  `travel_distance` INT NULL COMMENT 'Travel',
  `location` TEXT NULL,
  `zoom` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL DEFAULT NULL,
  `lastname` VARCHAR(45) NULL DEFAULT NULL,
  `country` VARCHAR(45) NULL DEFAULT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `password` LONGTEXT NULL DEFAULT NULL,
  `usertype` ENUM('employer','employee') NULL DEFAULT NULL,
  `lang` VARCHAR(45) NULL DEFAULT NULL,
  `validated` VARCHAR(45) NULL DEFAULT NULL,
  `work_enviroment_type` VARCHAR(45) NULL,
  `location_id` INT NULL,
  `vacancy_count` INT NULL DEFAULT 3,
  `emailer` TINYINT(1) NULL DEFAULT 0,
  `id_stripe` VARCHAR(255) NULL,
  `location_diameter` INT NULL DEFAULT 100,
  `signup_date` DATE NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user` (`email` ASC),
  CONSTRAINT `fk_user_work_enviroment1`
    FOREIGN KEY (`work_enviroment_type`)
    REFERENCES `appply`.`work_enviroment` (`type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_location1`
    FOREIGN KEY (`location_id`)
    REFERENCES `appply`.`location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 24
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`company` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `longitude` INT(11) NULL DEFAULT NULL,
  `latitude` INT(11) NULL DEFAULT NULL,
  `user_id` INT(11) NOT NULL,
  `zoom` INT(11) NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  `logo` TEXT NULL,
  `website` TEXT NULL,
  `work_enviroment_type` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `company` (`user_id` ASC),
  CONSTRAINT `fk_company_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_work_enviroment1`
    FOREIGN KEY (`work_enviroment_type`)
    REFERENCES `appply`.`work_enviroment` (`type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`vacancy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`vacancy` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `function` VARCHAR(45) NOT NULL,
  `posted_date` DATETIME NOT NULL,
  `user_id` INT(11) NOT NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_vacancy_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_vacancy_location1`
    FOREIGN KEY (`location_id`)
    REFERENCES `appply`.`location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`matches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`matches` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `percent` INT(11) NOT NULL,
  `user_id` INT(11) NOT NULL,
  `vacancy_id` INT(11) NOT NULL,
  `viewed` ENUM('yes','no') NOT NULL DEFAULT 'no',
  `employer_accepted` ENUM('yes','no') NOT NULL DEFAULT 'no',
  `employee_accepted` ENUM('yes','no') NOT NULL DEFAULT 'no',
  `softdeleted` ENUM('yes','no') NULL DEFAULT 'no',
  `match_date` DATE NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC, `vacancy_id` ASC),
  CONSTRAINT `fk_matches_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_matches_vacancy1`
    FOREIGN KEY (`vacancy_id`)
    REFERENCES `appply`.`vacancy` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`premium`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`premium` (
  `idpremium` INT(11) NOT NULL AUTO_INCREMENT,
  `used_amount` INT(11) NULL DEFAULT NULL,
  `user_id` INT(11) NOT NULL,
  `bundle_idbundle` INT(11) NOT NULL,
  `buy_date` DATETIME NOT NULL,
  PRIMARY KEY (`idpremium`),
  CONSTRAINT `fk_premium_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `fk_premium_bundle1`
    FOREIGN KEY (`bundle_idbundle`)
    REFERENCES `appply`.`bundle` (`idbundle`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`skills` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1541
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`specification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`specification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `percent` INT(11) NULL,
  `skills_id` INT(11) NOT NULL,
  `vacancy_id` INT(11) NULL,
  `user_id` INT(11) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_specification_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `appply`.`skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_specification_vacancy1`
    FOREIGN KEY (`vacancy_id`)
    REFERENCES `appply`.`vacancy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_specification_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`verification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`verification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` ENUM('ForgotPassword') NOT NULL,
  `date` DATE NULL,
  `user_id` INT(11) NOT NULL,
  `key` LONGTEXT CHARACTER SET 'big5' COLLATE 'big5_chinese_ci' NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_verification_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`notification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`notification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message_key` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `viewed` ENUM('yes','no') NULL DEFAULT 'no',
  `receiver` INT(11) NOT NULL,
  `sender` INT(11) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Notification_user1`
    FOREIGN KEY (`receiver`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Notification_user2`
    FOREIGN KEY (`sender`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
