-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: school_mini_system
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `student_assessment`
--

DROP TABLE IF EXISTS `student_assessment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_assessment` (
  `_id` varchar(255) NOT NULL,
  `user_code` varchar(255) NOT NULL,
  `assessment_code` varchar(255) NOT NULL,
  `subject_code` varchar(255) NOT NULL,
  `grade_code` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`_id`),
  KEY `user_code` (`user_code`),
  KEY `assessment_code` (`assessment_code`),
  KEY `subject_code` (`subject_code`),
  KEY `grade_code` (`grade_code`),
  CONSTRAINT `student_assessment_ibfk_1` FOREIGN KEY (`user_code`) REFERENCES `user` (`_id`),
  CONSTRAINT `student_assessment_ibfk_2` FOREIGN KEY (`assessment_code`) REFERENCES `assessment` (`_id`),
  CONSTRAINT `student_assessment_ibfk_3` FOREIGN KEY (`subject_code`) REFERENCES `subject` (`_id`),
  CONSTRAINT `student_assessment_ibfk_4` FOREIGN KEY (`grade_code`) REFERENCES `grade` (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_assessment`
--

LOCK TABLES `student_assessment` WRITE;
/*!40000 ALTER TABLE `student_assessment` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_assessment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-06 17:13:45
