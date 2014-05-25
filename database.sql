CREATE SCHEMA IF NOT EXISTS `appply` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `appply` ;

-- -----------------------------------------------------
-- Table `appply`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`user` (
  `idemployee` INT NOT NULL,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `usertype` ENUM('employee','employer') NULL,
  `email` VARCHAR(45) NULL,
  `password` TEXT NULL,
  PRIMARY KEY (`idemployee`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `appply`.`job`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appply`.`job` (
)
ENGINE = InnoDB;
