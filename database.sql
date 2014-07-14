-- MySQL dump 10.13  Distrib 5.5.37, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: appply
-- ------------------------------------------------------
-- Server version	5.5.37-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bundle`
--

DROP TABLE IF EXISTS `bundle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bundle` (
  `idbundle` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`idbundle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bundle`
--

LOCK TABLES `bundle` WRITE;
/*!40000 ALTER TABLE `bundle` DISABLE KEYS */;
/*!40000 ALTER TABLE `bundle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` text,
  `longitude` int(11) DEFAULT NULL,
  `latitude` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `zoom` int(11) DEFAULT NULL,
  `location` text,
  PRIMARY KEY (`id`),
  KEY `fk_company_user1_idx` (`user_id`),
  CONSTRAINT `fk_company_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (3,'Appply','We are the founders of this web application',2147483647,519071075,23,11,'192');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `percent` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `vacancy_id` int(11) NOT NULL,
  `viewed` enum('yes','no') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_matches_user1_idx` (`user_id`),
  KEY `fk_matches_vacancy1_idx` (`vacancy_id`),
  CONSTRAINT `fk_matches_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_matches_vacancy1` FOREIGN KEY (`vacancy_id`) REFERENCES `vacancy` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `premium`
--

DROP TABLE IF EXISTS `premium`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `premium` (
  `idpremium` int(11) NOT NULL AUTO_INCREMENT,
  `used_amount` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `bundle_idbundle` int(11) NOT NULL,
  `buy_date` datetime NOT NULL,
  PRIMARY KEY (`idpremium`),
  KEY `fk_premium_user1_idx` (`user_id`),
  KEY `fk_premium_bundle1_idx` (`bundle_idbundle`),
  CONSTRAINT `fk_premium_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_premium_bundle1` FOREIGN KEY (`bundle_idbundle`) REFERENCES `bundle` (`idbundle`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `premium`
--

LOCK TABLES `premium` WRITE;
/*!40000 ALTER TABLE `premium` DISABLE KEYS */;
/*!40000 ALTER TABLE `premium` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1541 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (4,'php'),(5,'javascript'),(6,'html'),(7,'css'),(8,'php'),(9,'javascript'),(10,'html'),(11,'css'),(12,'php'),(13,'javascript'),(14,'html'),(15,'css'),(16,'php'),(17,'javascript'),(18,'html'),(19,'css'),(20,'php'),(21,'javascript'),(22,'html'),(23,'css'),(24,'php'),(25,'javascript'),(26,'html'),(27,'css'),(28,'php'),(29,'javascript'),(30,'html'),(31,'css'),(32,'php'),(33,'javascript'),(34,'html'),(35,'css'),(36,'php'),(37,'javascript'),(38,'html'),(39,'css'),(40,'php'),(41,'javascript'),(42,'html'),(43,'css'),(44,'php'),(45,'javascript'),(46,'html'),(47,'css'),(48,'php'),(49,'javascript'),(50,'html'),(51,'css'),(52,'php'),(53,'javascript'),(54,'html'),(55,'css'),(56,'php'),(57,'javascript'),(58,'html'),(59,'css'),(60,'php'),(61,'javascript'),(62,'html'),(63,'css'),(64,'php'),(65,'javascript'),(66,'html'),(67,'css'),(68,'php'),(69,'javascript'),(70,'html'),(71,'css'),(72,'php'),(73,'javascript'),(74,'html'),(75,'css'),(76,'php'),(77,'javascript'),(78,'html'),(79,'css'),(80,'php'),(81,'javascript'),(82,'html'),(83,'css'),(84,'php'),(85,'javascript'),(86,'html'),(87,'css'),(88,'php'),(89,'javascript'),(90,'html'),(91,'css'),(92,'php'),(93,'javascript'),(94,'html'),(95,'css'),(96,'php'),(97,'javascript'),(98,'html'),(99,'css'),(100,'php'),(101,'javascript'),(102,'html'),(103,'css'),(104,'php'),(105,'javascript'),(106,'html'),(107,'css'),(108,'php'),(109,'javascript'),(110,'html'),(111,'css'),(112,'php'),(113,'javascript'),(114,'html'),(115,'css'),(116,'php'),(117,'javascript'),(118,'html'),(119,'css'),(120,'php'),(121,'javascript'),(122,'html'),(123,'css'),(124,'php'),(125,'javascript'),(126,'html'),(127,'css'),(128,'php'),(129,'javascript'),(130,'html'),(131,'css'),(132,'php'),(133,'javascript'),(134,'html'),(135,'css'),(136,'php'),(137,'javascript'),(138,'html'),(139,'css'),(140,'php'),(141,'javascript'),(142,'html'),(143,'css'),(144,'php'),(145,'javascript'),(146,'html'),(147,'css'),(148,'php'),(149,'javascript'),(150,'html'),(151,'css'),(152,'php'),(153,'javascript'),(154,'html'),(155,'css'),(156,'php'),(157,'javascript'),(158,'html'),(159,'css'),(160,'php'),(161,'javascript'),(162,'html'),(163,'css'),(164,'php'),(165,'javascript'),(166,'html'),(167,'css'),(168,'php'),(169,'javascript'),(170,'html'),(171,'css'),(172,'php'),(173,'javascript'),(174,'html'),(175,'css'),(176,'php'),(177,'javascript'),(178,'html'),(179,'css'),(180,'php'),(181,'javascript'),(182,'html'),(183,'css'),(184,'php'),(185,'javascript'),(186,'html'),(187,'css'),(188,'php'),(189,'javascript'),(190,'html'),(191,'css'),(192,'php'),(193,'javascript'),(194,'html'),(195,'css'),(196,'php'),(197,'javascript'),(198,'html'),(199,'css'),(200,'php'),(201,'javascript'),(202,'html'),(203,'css'),(204,'php'),(205,'javascript'),(206,'html'),(207,'css'),(208,'php'),(209,'javascript'),(210,'html'),(211,'css'),(212,'php'),(213,'javascript'),(214,'html'),(215,'css'),(216,'php'),(217,'javascript'),(218,'html'),(219,'css'),(220,'php'),(221,'javascript'),(222,'html'),(223,'css'),(224,'php'),(225,'javascript'),(226,'html'),(227,'css'),(228,'php'),(229,'javascript'),(230,'html'),(231,'css'),(232,'php'),(233,'javascript'),(234,'html'),(235,'css'),(236,'php'),(237,'javascript'),(238,'html'),(239,'css'),(240,'php'),(241,'javascript'),(242,'html'),(243,'css'),(244,'php'),(245,'javascript'),(246,'html'),(247,'css'),(248,'php'),(249,'javascript'),(250,'html'),(251,'css'),(252,'php'),(253,'javascript'),(254,'html'),(255,'css'),(256,'php'),(257,'javascript'),(258,'html'),(259,'css'),(260,'php'),(261,'javascript'),(262,'html'),(263,'css'),(264,'php'),(265,'javascript'),(266,'html'),(267,'css'),(268,'php'),(269,'javascript'),(270,'html'),(271,'css'),(272,'php'),(273,'javascript'),(274,'html'),(275,'css'),(276,'php'),(277,'javascript'),(278,'html'),(279,'css'),(280,'php'),(281,'javascript'),(282,'html'),(283,'css'),(284,'php'),(285,'javascript'),(286,'html'),(287,'css'),(288,'php'),(289,'javascript'),(290,'html'),(291,'css'),(292,'php'),(293,'javascript'),(294,'html'),(295,'css'),(296,'php'),(297,'javascript'),(298,'html'),(299,'css'),(300,'php'),(301,'javascript'),(302,'html'),(303,'css'),(304,'php'),(305,'javascript'),(306,'html'),(307,'css'),(308,'php'),(309,'javascript'),(310,'html'),(311,'css'),(312,'php'),(313,'javascript'),(314,'html'),(315,'css'),(316,'php'),(317,'javascript'),(318,'html'),(319,'css'),(320,'php'),(321,'javascript'),(322,'html'),(323,'css'),(324,'php'),(325,'javascript'),(326,'html'),(327,'css'),(328,'php'),(329,'javascript'),(330,'html'),(331,'css'),(332,'php'),(333,'javascript'),(334,'html'),(335,'css'),(336,'php'),(337,'javascript'),(338,'html'),(339,'css'),(340,'php'),(341,'javascript'),(342,'html'),(343,'css'),(344,'php'),(345,'javascript'),(346,'html'),(347,'css'),(348,'php'),(349,'javascript'),(350,'html'),(351,'css'),(352,'php'),(353,'javascript'),(354,'html'),(355,'css'),(356,'php'),(357,'javascript'),(358,'html'),(359,'css'),(360,'php'),(361,'javascript'),(362,'html'),(363,'css'),(364,'php'),(365,'javascript'),(366,'html'),(367,'css'),(368,'php'),(369,'javascript'),(370,'html'),(371,'css'),(372,'php'),(373,'javascript'),(374,'html'),(375,'css'),(376,'php'),(377,'javascript'),(378,'html'),(379,'css'),(380,'php'),(381,'javascript'),(382,'html'),(383,'css'),(384,'php'),(385,'javascript'),(386,'html'),(387,'css'),(388,'php'),(389,'javascript'),(390,'html'),(391,'css'),(392,'php'),(393,'javascript'),(394,'html'),(395,'css'),(396,'php'),(397,'javascript'),(398,'html'),(399,'css'),(400,'php'),(401,'javascript'),(402,'html'),(403,'css'),(404,'php'),(405,'javascript'),(406,'html'),(407,'css'),(408,'php'),(409,'javascript'),(410,'html'),(411,'css'),(412,'php'),(413,'javascript'),(414,'html'),(415,'css'),(416,'php'),(417,'javascript'),(418,'html'),(419,'css'),(420,'php'),(421,'javascript'),(422,'html'),(423,'css'),(424,'php'),(425,'javascript'),(426,'html'),(427,'css'),(428,'php'),(429,'javascript'),(430,'html'),(431,'css'),(432,'php'),(433,'javascript'),(434,'html'),(435,'css'),(436,'php'),(437,'javascript'),(438,'html'),(439,'css'),(440,'php'),(441,'javascript'),(442,'html'),(443,'css'),(444,'php'),(445,'javascript'),(446,'html'),(447,'css'),(448,'php'),(449,'javascript'),(450,'html'),(451,'css'),(452,'php'),(453,'javascript'),(454,'html'),(455,'css'),(456,'php'),(457,'javascript'),(458,'html'),(459,'css'),(460,'php'),(461,'javascript'),(462,'html'),(463,'css'),(464,'php'),(465,'javascript'),(466,'html'),(467,'css'),(468,'php'),(469,'javascript'),(470,'html'),(471,'css'),(472,'php'),(473,'javascript'),(474,'html'),(475,'css'),(476,'php'),(477,'javascript'),(478,'html'),(479,'css'),(480,'php'),(481,'javascript'),(482,'html'),(483,'css'),(484,'php'),(485,'javascript'),(486,'html'),(487,'css'),(488,'php'),(489,'javascript'),(490,'html'),(491,'css'),(492,'php'),(493,'javascript'),(494,'html'),(495,'css'),(496,'php'),(497,'javascript'),(498,'html'),(499,'css'),(500,'php'),(501,'javascript'),(502,'html'),(503,'css'),(504,'php'),(505,'javascript'),(506,'html'),(507,'css'),(508,'php'),(509,'javascript'),(510,'html'),(511,'css'),(512,'php'),(513,'javascript'),(514,'html'),(515,'css'),(516,'php'),(517,'javascript'),(518,'html'),(519,'css'),(520,'php'),(521,'javascript'),(522,'html'),(523,'css'),(524,'php'),(525,'javascript'),(526,'html'),(527,'css'),(528,'php'),(529,'javascript'),(530,'html'),(531,'css'),(532,'php'),(533,'javascript'),(534,'html'),(535,'css'),(536,'php'),(537,'javascript'),(538,'html'),(539,'css'),(540,'php'),(541,'javascript'),(542,'html'),(543,'css'),(544,'php'),(545,'javascript'),(546,'html'),(547,'css'),(548,'php'),(549,'javascript'),(550,'html'),(551,'css'),(552,'php'),(553,'javascript'),(554,'html'),(555,'css'),(556,'php'),(557,'javascript'),(558,'html'),(559,'css'),(560,'php'),(561,'javascript'),(562,'html'),(563,'css'),(564,'php'),(565,'javascript'),(566,'html'),(567,'css'),(568,'php'),(569,'javascript'),(570,'html'),(571,'css'),(572,'php'),(573,'javascript'),(574,'html'),(575,'css'),(576,'php'),(577,'javascript'),(578,'html'),(579,'css'),(580,'php'),(581,'javascript'),(582,'html'),(583,'css'),(584,'php'),(585,'javascript'),(586,'html'),(587,'css'),(588,'php'),(589,'javascript'),(590,'html'),(591,'css'),(592,'php'),(593,'javascript'),(594,'html'),(595,'css'),(596,'php'),(597,'javascript'),(598,'html'),(599,'css'),(600,'php'),(601,'javascript'),(602,'html'),(603,'css'),(604,'php'),(605,'javascript'),(606,'html'),(607,'css'),(608,'php'),(609,'javascript'),(610,'html'),(611,'css'),(612,'php'),(613,'javascript'),(614,'html'),(615,'css'),(616,'php'),(617,'javascript'),(618,'html'),(619,'css'),(620,'php'),(621,'javascript'),(622,'html'),(623,'css'),(624,'php'),(625,'javascript'),(626,'html'),(627,'css'),(628,'php'),(629,'javascript'),(630,'html'),(631,'css'),(632,'php'),(633,'javascript'),(634,'html'),(635,'css'),(636,'php'),(637,'javascript'),(638,'html'),(639,'css'),(640,'php'),(641,'javascript'),(642,'html'),(643,'css'),(644,'php'),(645,'javascript'),(646,'html'),(647,'css'),(648,'php'),(649,'javascript'),(650,'html'),(651,'css'),(652,'php'),(653,'javascript'),(654,'html'),(655,'css'),(656,'php'),(657,'javascript'),(658,'html'),(659,'css'),(660,'php'),(661,'javascript'),(662,'html'),(663,'css'),(664,'php'),(665,'javascript'),(666,'html'),(667,'css'),(668,'php'),(669,'javascript'),(670,'html'),(671,'css'),(672,'php'),(673,'javascript'),(674,'html'),(675,'css'),(676,'php'),(677,'javascript'),(678,'html'),(679,'css'),(680,'php'),(681,'javascript'),(682,'html'),(683,'css'),(684,'php'),(685,'javascript'),(686,'html'),(687,'css'),(688,'php'),(689,'javascript'),(690,'html'),(691,'css'),(692,'php'),(693,'javascript'),(694,'html'),(695,'css'),(696,'php'),(697,'javascript'),(698,'html'),(699,'css'),(700,'php'),(701,'javascript'),(702,'html'),(703,'css'),(704,'php'),(705,'javascript'),(706,'html'),(707,'css'),(708,'php'),(709,'javascript'),(710,'html'),(711,'css'),(712,'php'),(713,'javascript'),(714,'html'),(715,'css'),(716,'php'),(717,'javascript'),(718,'html'),(719,'css'),(720,'php'),(721,'javascript'),(722,'html'),(723,'css'),(724,'php'),(725,'javascript'),(726,'html'),(727,'css'),(728,'php'),(729,'javascript'),(730,'html'),(731,'css'),(732,'php'),(733,'javascript'),(734,'html'),(735,'css'),(736,'php'),(737,'javascript'),(738,'html'),(739,'css'),(740,'php'),(741,'javascript'),(742,'html'),(743,'css'),(744,'php'),(745,'javascript'),(746,'html'),(747,'css'),(748,'php'),(749,'javascript'),(750,'html'),(751,'css'),(752,'php'),(753,'javascript'),(754,'html'),(755,'css'),(756,'php'),(757,'javascript'),(758,'html'),(759,'css'),(760,'php'),(761,'javascript'),(762,'html'),(763,'css'),(764,'php'),(765,'javascript'),(766,'html'),(767,'css'),(768,'php'),(769,'javascript'),(770,'html'),(771,'css'),(772,'php'),(773,'javascript'),(774,'html'),(775,'css'),(776,'php'),(777,'javascript'),(778,'html'),(779,'css'),(780,'php'),(781,'javascript'),(782,'html'),(783,'css'),(784,'php'),(785,'javascript'),(786,'html'),(787,'css'),(788,'php'),(789,'javascript'),(790,'html'),(791,'css'),(792,'php'),(793,'javascript'),(794,'html'),(795,'css'),(796,'php'),(797,'javascript'),(798,'html'),(799,'css'),(800,'php'),(801,'javascript'),(802,'html'),(803,'css'),(804,'php'),(805,'javascript'),(806,'html'),(807,'css'),(808,'php'),(809,'javascript'),(810,'html'),(811,'css'),(812,'php'),(813,'javascript'),(814,'html'),(815,'css'),(816,'php'),(817,'javascript'),(818,'html'),(819,'css'),(820,'php'),(821,'javascript'),(822,'html'),(823,'css'),(824,'php'),(825,'javascript'),(826,'html'),(827,'css'),(828,'php'),(829,'javascript'),(830,'html'),(831,'css'),(832,'php'),(833,'javascript'),(834,'html'),(835,'css'),(836,'php'),(837,'javascript'),(838,'html'),(839,'css'),(840,'php'),(841,'javascript'),(842,'html'),(843,'css'),(844,'php'),(845,'javascript'),(846,'html'),(847,'css'),(848,'php'),(849,'javascript'),(850,'html'),(851,'css'),(852,'php'),(853,'javascript'),(854,'html'),(855,'css'),(856,'php'),(857,'javascript'),(858,'html'),(859,'css'),(860,'php'),(861,'javascript'),(862,'html'),(863,'css'),(864,'php'),(865,'javascript'),(866,'html'),(867,'css'),(868,'php'),(869,'javascript'),(870,'html'),(871,'css'),(872,'php'),(873,'javascript'),(874,'html'),(875,'css'),(876,'php'),(877,'javascript'),(878,'html'),(879,'css'),(880,'php'),(881,'javascript'),(882,'html'),(883,'css'),(884,'php'),(885,'javascript'),(886,'html'),(887,'css'),(888,'php'),(889,'javascript'),(890,'html'),(891,'css'),(892,'php'),(893,'javascript'),(894,'html'),(895,'css'),(896,'php'),(897,'javascript'),(898,'html'),(899,'css'),(900,'php'),(901,'javascript'),(902,'html'),(903,'css'),(904,'php'),(905,'javascript'),(906,'html'),(907,'css'),(908,'php'),(909,'javascript'),(910,'html'),(911,'css'),(912,'php'),(913,'javascript'),(914,'html'),(915,'css'),(916,'php'),(917,'javascript'),(918,'html'),(919,'css'),(920,'php'),(921,'javascript'),(922,'html'),(923,'css'),(924,'php'),(925,'javascript'),(926,'html'),(927,'css'),(928,'php'),(929,'javascript'),(930,'html'),(931,'css'),(932,'php'),(933,'javascript'),(934,'html'),(935,'css'),(936,'php'),(937,'javascript'),(938,'html'),(939,'css'),(940,'php'),(941,'javascript'),(942,'html'),(943,'css'),(944,'php'),(945,'javascript'),(946,'html'),(947,'css'),(948,'php'),(949,'javascript'),(950,'html'),(951,'css'),(952,'php'),(953,'javascript'),(954,'html'),(955,'css'),(956,'php'),(957,'javascript'),(958,'html'),(959,'css'),(960,'php'),(961,'javascript'),(962,'html'),(963,'css'),(964,'php'),(965,'javascript'),(966,'html'),(967,'css'),(968,'php'),(969,'javascript'),(970,'html'),(971,'css'),(972,'php'),(973,'javascript'),(974,'html'),(975,'css'),(976,'php'),(977,'javascript'),(978,'html'),(979,'css'),(980,'php'),(981,'javascript'),(982,'html'),(983,'css'),(984,'php'),(985,'javascript'),(986,'html'),(987,'css'),(988,'php'),(989,'javascript'),(990,'html'),(991,'css'),(992,'php'),(993,'javascript'),(994,'html'),(995,'css'),(996,'php'),(997,'javascript'),(998,'html'),(999,'css'),(1000,'php'),(1001,'javascript'),(1002,'html'),(1003,'css'),(1004,'php'),(1005,'javascript'),(1006,'html'),(1007,'css'),(1008,'php'),(1009,'javascript'),(1010,'html'),(1011,'css'),(1012,'php'),(1013,'javascript'),(1014,'html'),(1015,'css'),(1016,'php'),(1017,'javascript'),(1018,'html'),(1019,'css'),(1020,'php'),(1021,'javascript'),(1022,'html'),(1023,'css'),(1024,'php'),(1025,'javascript'),(1026,'php'),(1027,'javascript'),(1028,'php'),(1029,'javascript'),(1030,'php'),(1031,'javascript'),(1032,'php'),(1033,'javascript'),(1034,'php'),(1035,'javascript'),(1036,'php'),(1037,'javascript'),(1038,'php'),(1039,'javascript'),(1040,'php'),(1041,'javascript'),(1042,'php'),(1043,'javascript'),(1044,'php'),(1045,'javascript'),(1046,'php'),(1047,'javascript'),(1048,'php'),(1049,'javascript'),(1050,'php'),(1051,'javascript'),(1052,'php'),(1053,'javascript'),(1054,'php'),(1055,'javascript'),(1056,'php'),(1057,'javascript'),(1058,'php'),(1059,'javascript'),(1060,'php'),(1061,'javascript'),(1062,'php'),(1063,'javascript'),(1064,'php'),(1065,'javascript'),(1066,'php'),(1067,'javascript'),(1068,'php'),(1069,'javascript'),(1070,'php'),(1071,'javascript'),(1072,'php'),(1073,'javascript'),(1074,'php'),(1075,'javascript'),(1076,'php'),(1077,'javascript'),(1078,'php'),(1079,'javascript'),(1080,'php'),(1081,'javascript'),(1082,'php'),(1083,'javascript'),(1084,'php'),(1085,'javascript'),(1086,'php'),(1087,'javascript'),(1088,'php'),(1089,'javascript'),(1090,'php'),(1091,'javascript'),(1092,'php'),(1093,'javascript'),(1094,'php'),(1095,'javascript'),(1096,'php'),(1097,'javascript'),(1098,'php'),(1099,'javascript'),(1100,'php'),(1101,'javascript'),(1102,'php'),(1103,'javascript'),(1104,'php'),(1105,'javascript'),(1106,'php'),(1107,'javascript'),(1108,'php'),(1109,'javascript'),(1110,'php'),(1111,'javascript'),(1112,'php'),(1113,'javascript'),(1114,'php'),(1115,'javascript'),(1116,'php'),(1117,'javascript'),(1118,'php'),(1119,'javascript'),(1120,'php'),(1121,'javascript'),(1122,'php'),(1123,'javascript'),(1124,'php'),(1125,'javascript'),(1126,'php'),(1127,'javascript'),(1128,'php'),(1129,'javascript'),(1130,'php'),(1131,'javascript'),(1132,'php'),(1133,'javascript'),(1134,'php'),(1135,'javascript'),(1136,'php'),(1137,'javascript'),(1138,'php'),(1139,'javascript'),(1140,'php'),(1141,'javascript'),(1142,'php'),(1143,'javascript'),(1144,'php'),(1145,'javascript'),(1146,'php'),(1147,'javascript'),(1148,'php'),(1149,'javascript'),(1150,'php'),(1151,'javascript'),(1152,'php'),(1153,'javascript'),(1154,'php'),(1155,'javascript'),(1156,'php'),(1157,'javascript'),(1158,'php'),(1159,'javascript'),(1160,'php'),(1161,'javascript'),(1162,'php'),(1163,'javascript'),(1164,'php'),(1165,'javascript'),(1166,'php'),(1167,'javascript'),(1168,'php'),(1169,'javascript'),(1170,'php'),(1171,'javascript'),(1172,'php'),(1173,'javascript'),(1174,'php'),(1175,'javascript'),(1176,'php'),(1177,'javascript'),(1178,'php'),(1179,'javascript'),(1180,'php'),(1181,'javascript'),(1182,'php'),(1183,'javascript'),(1184,'php'),(1185,'javascript'),(1186,'php'),(1187,'javascript'),(1188,'php'),(1189,'javascript'),(1190,'php'),(1191,'javascript'),(1192,'php'),(1193,'javascript'),(1194,'php'),(1195,'javascript'),(1196,'php'),(1197,'javascript'),(1198,'php'),(1199,'javascript'),(1200,'php'),(1201,'javascript'),(1202,'php'),(1203,'javascript'),(1204,'php'),(1205,'javascript'),(1206,'php'),(1207,'javascript'),(1208,'php'),(1209,'javascript'),(1210,'php'),(1211,'javascript'),(1212,'php'),(1213,'javascript'),(1214,'php'),(1215,'javascript'),(1216,'php'),(1217,'javascript'),(1218,'php'),(1219,'javascript'),(1220,'php'),(1221,'javascript'),(1222,'php'),(1223,'javascript'),(1224,'php'),(1225,'javascript'),(1226,'php'),(1227,'javascript'),(1228,'php'),(1229,'javascript'),(1230,'php'),(1231,'javascript'),(1232,'php'),(1233,'javascript'),(1234,'php'),(1235,'javascript'),(1236,'php'),(1237,'javascript'),(1238,'php'),(1239,'javascript'),(1240,'php'),(1241,'javascript'),(1242,'php'),(1243,'javascript'),(1244,'php'),(1245,'javascript'),(1246,'php'),(1247,'javascript'),(1248,'php'),(1249,'javascript'),(1250,'php'),(1251,'javascript'),(1252,'php'),(1253,'javascript'),(1254,'php'),(1255,'javascript'),(1256,'php'),(1257,'javascript'),(1258,'php'),(1259,'javascript'),(1260,'php'),(1261,'javascript'),(1262,'php'),(1263,'javascript'),(1264,'php'),(1265,'javascript'),(1266,'php'),(1267,'javascript'),(1268,'php'),(1269,'javascript'),(1270,'php'),(1271,'javascript'),(1272,'php'),(1273,'javascript'),(1274,'php'),(1275,'javascript'),(1276,'php'),(1277,'javascript'),(1278,'php'),(1279,'javascript'),(1280,'php'),(1281,'javascript'),(1282,'php'),(1283,'javascript'),(1284,'php'),(1285,'javascript'),(1286,'php'),(1287,'javascript'),(1288,'php'),(1289,'javascript'),(1290,'php'),(1291,'javascript'),(1292,'php'),(1293,'javascript'),(1294,'php'),(1295,'javascript'),(1296,'php'),(1297,'javascript'),(1298,'php'),(1299,'javascript'),(1300,'php'),(1301,'javascript'),(1302,'php'),(1303,'javascript'),(1304,'php'),(1305,'javascript'),(1306,'php'),(1307,'javascript'),(1308,'php'),(1309,'javascript'),(1310,'php'),(1311,'javascript'),(1312,'php'),(1313,'javascript'),(1314,'php'),(1315,'javascript'),(1316,'php'),(1317,'javascript'),(1318,'php'),(1319,'javascript'),(1320,'php'),(1321,'javascript'),(1322,'php'),(1323,'javascript'),(1324,'php'),(1325,'javascript'),(1326,'php'),(1327,'javascript'),(1328,'php'),(1329,'javascript'),(1330,'php'),(1331,'javascript'),(1332,'php'),(1333,'javascript'),(1334,'php'),(1335,'javascript'),(1336,'php'),(1337,'javascript'),(1338,'php'),(1339,'javascript'),(1340,'php'),(1341,'javascript'),(1342,'php'),(1343,'javascript'),(1344,'php'),(1345,'javascript'),(1346,'php'),(1347,'javascript'),(1348,'php'),(1349,'javascript'),(1350,'php'),(1351,'javascript'),(1352,'php'),(1353,'javascript'),(1354,'php'),(1355,'javascript'),(1356,'php'),(1357,'javascript'),(1358,'php'),(1359,'javascript'),(1360,'php'),(1361,'javascript'),(1362,'php'),(1363,'javascript'),(1364,'php'),(1365,'javascript'),(1366,'php'),(1367,'javascript'),(1368,'php'),(1369,'javascript'),(1370,'php'),(1371,'javascript'),(1372,'php'),(1373,'javascript'),(1374,'php'),(1375,'javascript'),(1376,'php'),(1377,'javascript'),(1378,'php'),(1379,'javascript'),(1380,'php'),(1381,'javascript'),(1382,'php'),(1383,'javascript'),(1384,'php'),(1385,'javascript'),(1386,'php'),(1387,'javascript'),(1388,'php'),(1389,'javascript'),(1390,'php'),(1391,'javascript'),(1392,'php'),(1393,'javascript'),(1394,'php'),(1395,'javascript'),(1396,'php'),(1397,'javascript'),(1398,'php'),(1399,'javascript'),(1400,'php'),(1401,'javascript'),(1402,'php'),(1403,'javascript'),(1404,'php'),(1405,'javascript'),(1406,'php'),(1407,'javascript'),(1408,'php'),(1409,'javascript'),(1410,'php'),(1411,'javascript'),(1412,'php'),(1413,'javascript'),(1414,'php'),(1415,'javascript'),(1416,'php'),(1417,'javascript'),(1418,'php'),(1419,'javascript'),(1420,'php'),(1421,'javascript'),(1422,'php'),(1423,'javascript'),(1424,'php'),(1425,'javascript'),(1426,'php'),(1427,'javascript'),(1428,'php'),(1429,'javascript'),(1430,'php'),(1431,'javascript'),(1432,'php'),(1433,'javascript'),(1434,'php'),(1435,'javascript'),(1436,'php'),(1437,'javascript'),(1438,'php'),(1439,'javascript'),(1440,'php'),(1441,'javascript'),(1442,'php'),(1443,'javascript'),(1444,'php'),(1445,'javascript'),(1446,'php'),(1447,'javascript'),(1448,'php'),(1449,'javascript'),(1450,'php'),(1451,'javascript'),(1452,'php'),(1453,'javascript'),(1454,'php'),(1455,'javascript'),(1456,'php'),(1457,'javascript'),(1458,'php'),(1459,'javascript'),(1460,'php'),(1461,'javascript'),(1462,'php'),(1463,'javascript'),(1464,'php'),(1465,'javascript'),(1466,'php'),(1467,'javascript'),(1468,'php'),(1469,'javascript'),(1470,'php'),(1471,'javascript'),(1472,'php'),(1473,'javascript'),(1474,'php'),(1475,'javascript'),(1476,'php'),(1477,'javascript'),(1478,'php'),(1479,'javascript'),(1480,'php'),(1481,'javascript'),(1482,'php'),(1483,'javascript'),(1484,'php'),(1485,'javascript'),(1486,'php'),(1487,'javascript'),(1488,'php'),(1489,'javascript'),(1490,'php'),(1491,'javascript'),(1492,'php'),(1493,'javascript'),(1494,'php'),(1495,'javascript'),(1496,'php'),(1497,'javascript'),(1498,'php'),(1499,'javascript'),(1500,'php'),(1501,'javascript'),(1502,'php'),(1503,'javascript'),(1504,'php'),(1505,'javascript'),(1506,'php'),(1507,'javascript'),(1508,'php'),(1509,'javascript'),(1510,'php'),(1511,'javascript'),(1512,'php'),(1513,'javascript'),(1514,'php'),(1515,'javascript'),(1516,'php'),(1517,'javascript'),(1518,'php'),(1519,'javascript'),(1520,'php'),(1521,'javascript'),(1522,'php'),(1523,'javascript'),(1524,'php'),(1525,'javascript'),(1526,'php'),(1527,'javascript'),(1528,'php'),(1529,'javascript'),(1530,'php'),(1531,'javascript'),(1532,'php'),(1533,'javascript'),(1534,'php'),(1535,'javascript'),(1536,'php'),(1537,'java'),(1538,'html'),(1539,'css'),(1540,'php');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specification`
--

DROP TABLE IF EXISTS `specification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `percent` varchar(45) DEFAULT NULL,
  `vacancy_id` int(11) NOT NULL,
  `skills_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_specification_vacancy1_idx` (`vacancy_id`),
  KEY `fk_specification_skills1_idx` (`skills_id`),
  CONSTRAINT `fk_specification_vacancy1` FOREIGN KEY (`vacancy_id`) REFERENCES `vacancy` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ACTION,
  CONSTRAINT `fk_specification_skills1` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1541 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specification`
--

LOCK TABLES `specification` WRITE;
/*!40000 ALTER TABLE `specification` DISABLE KEYS */;
INSERT INTO `specification` VALUES (1536,'100',6,1536),(1537,'100',6,1537),(1538,'100',6,1538),(1539,'100',6,1539),(1540,'100',7,1540);
/*!40000 ALTER TABLE `specification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` longtext,
  `usertype` enum('employer','employee') DEFAULT NULL,
  `lang` varchar(45) DEFAULT NULL,
  `validated` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (23,'Denzyl','Dick',NULL,NULL,'denzyl@live.nl','$2a$08$GcxjiIpouYTyZU7sbTj8KuzftxQ9bR0jH2dJqCQaKoaZiYVD8GPum','employer',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacancy`
--

DROP TABLE IF EXISTS `vacancy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vacancy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `function` varchar(45) NOT NULL,
  `posted_date` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `longitude` int(100) DEFAULT NULL,
  `latitude` int(100) DEFAULT NULL,
  `location` text,
  `zoom` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vacancy_user_idx` (`user_id`),
  CONSTRAINT `fk_vacancy_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacancy`
--

LOCK TABLES `vacancy` WRITE;
/*!40000 ALTER TABLE `vacancy` DISABLE KEYS */;
INSERT INTO `vacancy` VALUES (6,'Developer ','0000-00-00 00:00:00',23,NULL,NULL,NULL,NULL),(7,'Developer','0000-00-00 00:00:00',23,4,52,'Rotterdam Prinsendam 192',11);
/*!40000 ALTER TABLE `vacancy` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-07-13 21:21:16
