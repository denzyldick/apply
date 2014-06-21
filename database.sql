SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `appply` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `appply` ;

-- -----------------------------------------------------
-- Table `appply`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` LONGTEXT NULL,
  `usertype` ENUM('employer','employee') NULL,
  `lang` VARCHAR(45) NULL,
  `validated` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`vacancy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`vacancy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `function` VARCHAR(45) NOT NULL,
  `posted_date` DATETIME NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_vacancy_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_vacancy_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`specification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`specification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `percent` VARCHAR(45) NULL,
  `vacancy_id` INT NOT NULL,
  `skills_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_specification_vacancy1_idx` (`vacancy_id` ASC),
  INDEX `fk_specification_skills1_idx` (`skills_id` ASC),
  CONSTRAINT `fk_specification_vacancy1`
    FOREIGN KEY (`vacancy_id`)
    REFERENCES `appply`.`vacancy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_specification_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `appply`.`skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`matches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`matches` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `percent` INT NOT NULL,
  `user_id` INT NOT NULL,
  `vacancy_id` INT NOT NULL,
  `viewed` ENUM('yes','no') NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_matches_user1_idx` (`user_id` ASC),
  INDEX `fk_matches_vacancy1_idx` (`vacancy_id` ASC),
  CONSTRAINT `fk_matches_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matches_vacancy1`
    FOREIGN KEY (`vacancy_id`)
    REFERENCES `appply`.`vacancy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`bundle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`bundle` (
  `idbundle` INT NOT NULL AUTO_INCREMENT,
  `amount` INT NOT NULL,
  `price` DECIMAL NOT NULL,
  PRIMARY KEY (`idbundle`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`premium`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`premium` (
  `idpremium` INT NOT NULL AUTO_INCREMENT,
  `used_amount` INT NULL,
  `user_id` INT NOT NULL,
  `bundle_idbundle` INT NOT NULL,
  `buy_date` DATETIME NOT NULL,
  PRIMARY KEY (`idpremium`),
  INDEX `fk_premium_user1_idx` (`user_id` ASC),
  INDEX `fk_premium_bundle1_idx` (`bundle_idbundle` ASC),
  CONSTRAINT `fk_premium_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_premium_bundle1`
    FOREIGN KEY (`bundle_idbundle`)
    REFERENCES `appply`.`bundle` (`idbundle`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`company` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  `latitude` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_company_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_company_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `appply`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
