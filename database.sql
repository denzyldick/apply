SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `appply` ;
CREATE SCHEMA IF NOT EXISTS `appply` ;
USE `appply` ;

-- -----------------------------------------------------
-- Table `appply`.`bundle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `appply`.`bundle` ;

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
DROP TABLE IF EXISTS `appply`.`work_enviroment` ;

CREATE TABLE IF NOT EXISTS `appply`.`work_enviroment` (
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `appply`.`location` ;

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
DROP TABLE IF EXISTS `appply`.`user` ;

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
  UNIQUE INDEX `user` (`email` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 24
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`company`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `appply`.`company` ;

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
  UNIQUE INDEX `company` (`user_id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`vacancy`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `appply`.`vacancy` ;

CREATE TABLE IF NOT EXISTS `appply`.`vacancy` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `function` VARCHAR(45) NOT NULL,
  `posted_date` DATETIME NOT NULL,
  `user_id` INT(11) NOT NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`matches`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `appply`.`matches` ;

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
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC, `vacancy_id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`premium`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `appply`.`premium` ;

CREATE TABLE IF NOT EXISTS `appply`.`premium` (
  `idpremium` INT(11) NOT NULL AUTO_INCREMENT,
  `used_amount` INT(11) NULL DEFAULT NULL,
  `user_id` INT(11) NOT NULL,
  `bundle_idbundle` INT(11) NOT NULL,
  `buy_date` DATETIME NOT NULL,
  PRIMARY KEY (`idpremium`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `appply`.`skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `appply`.`skills` ;

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
DROP TABLE IF EXISTS `appply`.`specification` ;

CREATE TABLE IF NOT EXISTS `appply`.`specification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `percent` INT(11) NULL,
  `skills_id` INT(11) NOT NULL,
  `vacancy_id` INT(11) NULL,
  `user_id` INT(11) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`verification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `appply`.`verification` ;

CREATE TABLE IF NOT EXISTS `appply`.`verification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL,
  `date` DATE NULL,
  `user_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
