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
  PRIMARY KEY (`id`))
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
  `location` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_company_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_company_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
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
  `longitude` INT(100) NULL DEFAULT NULL,
  `latitude` INT(100) NULL DEFAULT NULL,
  `location` TEXT NULL DEFAULT NULL,
  `zoom` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_vacancy_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_vacancy_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
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
  `viewed` ENUM('yes','no') NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_matches_user1_idx` (`user_id` ASC),
  INDEX `fk_matches_vacancy1_idx` (`vacancy_id` ASC),
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
  INDEX `fk_premium_user1_idx` (`user_id` ASC),
  INDEX `fk_premium_bundle1_idx` (`bundle_idbundle` ASC),
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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
