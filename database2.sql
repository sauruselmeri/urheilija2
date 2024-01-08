-- --------------------------------------------------------
-- Verkkotietokone:              127.0.0.1
-- Palvelinversio:               10.10.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Versio:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for urheilija-ii
CREATE DATABASE IF NOT EXISTS `urheilija-ii` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `urheilija-ii`;

-- Dumping structure for taulu urheilija-ii.urheilijatiedot
CREATE TABLE IF NOT EXISTS `urheilijatiedot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nimet` varchar(50) NOT NULL,
  `Syntymavuosi` date NOT NULL,
  `Paino` double NOT NULL,
  `LinkkiKuvaan` varchar(300) NOT NULL,
  `Laji` varchar(50) NOT NULL,
  `Saavutukset` text NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table urheilija-ii.urheilijatiedot: ~7 rows (suunnilleen)
/*!40000 ALTER TABLE `urheilijatiedot` DISABLE KEYS */;
INSERT INTO `urheilijatiedot` (`id`, `Nimet`, `Syntymavuosi`, `Paino`, `LinkkiKuvaan`, `Laji`, `Saavutukset`) VALUES
	(1, 'Kobe "Black Mamba" Bryant', '1978-08-23', 93, 'https://fi.wikipedia.org/wiki/Kobe_Bryant#/media/Tiedosto:Kobe_Bryant_2015.jpg', 'Koripallo', '5x NBA mestari, 1x NBA arvokkainpelaaja, 2x finaalien arvokkainpelaaja, 18x All-Star pelaaja'),
	(2, 'LeBron "King" James', '1984-12-30', 113, 'https://fi.wikipedia.org/wiki/LeBron_James#/media/Tiedosto:LeBron_James_(51959977144)_(cropped2).jpg', 'Koripallo', '4x NBA mestari, 4x NBA arvokkainepelaaja, 4x finaalien arvokkainpelaaja, 16x All-Star pelaaja');
/*!40000 ALTER TABLE `urheilijatiedot` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
